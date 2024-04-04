import express, {Request,Response} from 'express';
import cors from 'cors';

const app = express();
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

if (isDevelopment) app.use(cors());
if (isProduction) app.use(express.static('public'));



if (isProduction) app.get('*', (req:Request, res:Response) => res.sendFile('index.html', { root: 'public' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server ->  http://localhost:${PORT}`));
app.get('/api/hello', (req:Request, res:Response) => res.json({ message: 'Parishkar' }));