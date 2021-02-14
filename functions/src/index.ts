import api from "./api/api";
// import index from "../v1/index";
import { Env, EnvDef } from "./env";

Env.init(EnvDef.DEVELOP);

exports.api = api;
