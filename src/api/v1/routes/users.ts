import express, { NextFunction, Request, Response } from "express";
import { UsersPriceService } from "../../../services/usersService";

const users = express.Router();

users.get(
  "/total_price",
  function (req: Request, res: Response, next: NextFunction) {
    const totalPrice = UsersPriceService.culculateTotalPrice();
    res.status(200).send({ totalPrice });
  }
);

export default users;
