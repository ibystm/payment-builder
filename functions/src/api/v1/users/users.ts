import * as httpStatus from "http-status-codes";
import * as functions from "firebase-functions";
import * as express from "express";

const users = express();

// userの現在の借金情報を取得
users.get(
  "/:userId/total_debts",
  (req: express.Request, res: express.Response) => {
    res.status(httpStatus.StatusCodes.OK).send("借金はこれくらいありますよ");
  }
);

export default functions.https.onRequest(users);
