import express, {Express} from "express";
import deSerializeUser from "../Middleware/deserializeUser";
import routes from "../routes";
import cors from "cors";
import config from "config";
import cookieParser from "cookie-parser";

function createServer(){
    const app:Express = express();
    //The order of execution of Middleware is important
    app.use(cors({
        origin: [config.get<string>('origin'),'http://localhost:3000','http://localhost:3001',`http://127.0.0.1` ,'http://127.0.0.1:1430'],
        credentials: true,
    }));
    app.use(cookieParser());
    app.use(express.json())
    app.use(deSerializeUser);
    routes(app);
    return app;
}

export default createServer;
