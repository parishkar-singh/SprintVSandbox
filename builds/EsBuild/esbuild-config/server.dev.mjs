import { build } from 'esbuild';

const buildServer = async () => {
	try {
		await build({
			entryPoints: ['src/server/server.ts'],
			bundle: true,
			sourcemap: true,
			minify: false,
			platform: 'node',
			target: 'node18.6',
			external: ['node_modules/*'],

			define: {
				'process.env.NODE_ENV': "'development'"
			},

			outfile: 'dist/server.js'
		});

		console.info('Server build completed successfully.');
	} catch (error) {
		console.error('An error occurred:', error);
		process.exit(1);
	}
};

buildServer();
