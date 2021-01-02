import * as express from "express";
import { UsersPriceService } from "../../../services/usersService";
import * as httpStatus from "http-status-codes";

const users = express.Router();

// userの現在の支払い総額を算出する
users.get(
  "/total_price",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    //   const goma = "d65";
    // DBからdataをfetchする
    try {
      const totalPrice = await UsersPriceService.culculateTotalPrice();
      res.status(httpStatus.StatusCodes.OK).send({ totalPrice });
    } catch (e) {
      console.log("e", e);
    }
  }
);

export default users;
