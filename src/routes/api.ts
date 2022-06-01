import { Router } from 'express';
import healthRouter from './health-router';
import todosRouter from './todos-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/health-check', healthRouter);
apiRouter.use('/todos', todosRouter);

// Export default
export default apiRouter;
