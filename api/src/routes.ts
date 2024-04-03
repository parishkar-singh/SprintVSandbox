import { Express, Router } from "express";
import healthRoutes from "./Routes/health.route";
import userRoutes from "./Routes/user.route";
import sessionRoutes from "./Routes/session.route";
import updateRoutes from "./Routes/update.route";
function routes(app: Express) {
    const apiRouter = Router();

    // Combine all the Routes
    apiRouter.use('/health', healthRoutes);
    apiRouter.use('/users', userRoutes);
    apiRouter.use('/sessions', sessionRoutes);
    apiRouter.use('/updates',updateRoutes)

    // Every route in apiRouter will be prefixed with /api
    app.use('/api', apiRouter);
}

export default routes;
