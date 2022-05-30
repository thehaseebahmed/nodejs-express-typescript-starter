import { Router } from 'express';
import pingRouter from './ping-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/ping', pingRouter);

// Export default
export default apiRouter;
