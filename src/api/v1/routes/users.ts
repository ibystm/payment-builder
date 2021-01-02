import express, { NextFunction, Request, Response } from "express";
import { UsersPriceService } from "../../../services/usersService";
import * as httpStatus from "http-status-codes";

const users = express.Router();

// userの現在の支払い総額を算出する
users.get(
  "/total_price",
  async (req: Request, res: Response, next: NextFunction) => {
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
