import express, { NextFunction, Request, Response } from "express";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.render("index", { title: "Express" });
  }
);

export default indexRouter;
