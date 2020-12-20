import express, { NextFunction, Request, Response } from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import createError from "http-errors";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");

/**
 *  ミドルウェアのマウント
 *  express.json()はjsonを扱えるようにしている
 *  express.urlencoded(): URL解析
 * */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ヘッダー情報からcookie情報を拾ってくれる
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  // errorオブジェクトを作ってくれるミドルウェア
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // µset locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
