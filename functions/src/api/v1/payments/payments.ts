import * as express from "express";
import * as httpStatus from "http-status-codes";
import * as functions from "firebase-functions";

const payments = express();

payments.post("/", (req: express.Request, res: express.Response) => {
  const paymentData = req.body;
  res.status(httpStatus.StatusCodes.OK).send("ok");
});

export default functions.https.onRequest(payments);
