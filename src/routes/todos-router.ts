import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";
import todosRepo from "@repos/todos-repo";

// Constants
const router = Router();
const { OK } = StatusCodes;

// Endpoints
router.get("/", async (req: Request, res: Response) => {
  const data = await todosRepo.readAsync();
  return res.status(OK).json(data);
});

router.get("/:id", async (req: Request, res: Response) => {
  const data = await todosRepo.readOneAsync(Number(req.params.id));
  return res.status(OK).json(data);
});

// Exports
export default router;
