import express from "express";
import users from "./routes/users";

const index = express.Router();

index.use("users", users);

export default index;
