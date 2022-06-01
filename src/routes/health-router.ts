import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

// Constants
const router = Router();
const { OK, SERVICE_UNAVAILABLE } = StatusCodes;

// Endpoints
router.get("/", async (req: Request, res: Response) => {
  const healthcheck: { uptime: number; message: any; timestamp: number } = {
    message: "OK",
    timestamp: Date.now(),
    uptime: process.uptime(),
  };

  try {
    return res.status(OK).json(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(SERVICE_UNAVAILABLE).send();
  }
});

// Export default
export default router;
