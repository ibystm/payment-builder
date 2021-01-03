import * as httpStatus from "http-status-codes";
import * as functions from "firebase-functions";
import * as express from "express";
import { UsersService } from "../../../services/usersService";
import { PaymentTypes } from "../../../firestore/types/firestoreUserPayments";

const users = express();

users.get("/", (req: express.Request, res: express.Response) => {
  res.status(httpStatus.StatusCodes.OK).send("OK");
});

// userの現在の借金情報を取得
users.get(
  "/:userId/total_debts",
  async (req: express.Request, res: express.Response) => {
    try {
      const { userId } = req.params;
      console.log("userno IDha  ##############", userId);
      await UsersService.fetchTotalDebts(userId);
      res.end();
      // res.status(httpStatus.StatusCodes.OK).send("借金はこれくらいありますよ");
    } catch (e) {}
  }
);

users.post(
  "/:userId/signin",
  async (req: express.Request, res: express.Response) => {
    // ログインの処理呼ぶ
  }
);

users.post(
  "/:userId/payment",
  async (req: express.Request, res: express.Response) => {
    const { paymentRequest }: { paymentRequest: PaymentTypes } = req.body;
    if (
      !paymentRequest ||
      !paymentRequest.price ||
      !paymentRequest.isAdjustmentComplete ||
      !paymentRequest.paiedBy
    ) {
      res.status(httpStatus.StatusCodes.BAD_REQUEST).end();
    }
    res.send(httpStatus.StatusCodes.OK).send("OK");
  }
);

export default functions.https.onRequest(users);
