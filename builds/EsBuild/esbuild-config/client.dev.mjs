import * as esbuild from 'esbuild';
import * as sass from 'sass';
import { sassPlugin } from 'esbuild-sass-plugin';

let ctx;

try {
	ctx = await esbuild.context({
		entryPoints: ['src/client/index.tsx'],
		bundle: true,
		minify: false,
		sourcemap: true,
		outfile: 'public/static/bundle.js',
		plugins: [sassPlugin({ type: 'style', logger: sass.Logger.silent, quietDeps: true })],
		define: {
			'process.env.NODE_ENV': "'development'"
		}
	});

	await ctx.watch();

	const { host, port } = await ctx.serve({
		servedir: 'public',
		fallback: 'public/index.html',
		port:3000
	});

	console.info(`Client -> http://localhost:${port}`);
} catch (error) {
	console.error('An error occurred:', error);
	process.exit(1);
}
