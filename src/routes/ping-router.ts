import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

// Constants
const router = Router();
const { OK } = StatusCodes;

// Endpoints
router.get("", async (_: Request, res: Response) => {
  const response: any = {
    data: {
      message: `Express + TypeScript Server`,
    },
  };

  if (process.env.NODE_ENV !== "production") {
    response.data.env = process.env.NODE_ENV;
  }

  return res.status(OK).json(response);
});

// Export default
export default router;
