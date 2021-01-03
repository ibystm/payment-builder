// import * as express from "express";
// import * as cookieParser from "cookie-parser";
// import index from "./api/v1/index";
// import * as createError from "http-errors";

// const app = express();

// // view engine setup
// app.set("view engine", "jade");

// /**
//  *  ミドルウェアのマウント
//  *  express.json()はjsonを扱えるようにしている
//  *  express.urlencoded(): URL解析
//  * */
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // ヘッダー情報からcookie情報を拾ってくれる
// app.use(cookieParser());

// app.use("/api/v1", index);

// // catch 404 and forward to error handler
// app.use(function (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) {
//   // errorオブジェクトを作ってくれるミドルウェア
//   next(createError(404));
// });

// // error handler
// app.use(function (
//   err: any,
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) {
//   // µset locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// export default app;
