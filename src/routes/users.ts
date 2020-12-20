import express, { NextFunction, Request, Response } from "express";

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.send("respond with a resource");
  }
);

export default usersRouter;
