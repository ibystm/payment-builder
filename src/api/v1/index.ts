import express from "express";
import router from "./routes/router";

const index = express.Router();

index.use("/v1", router);

export default index;
