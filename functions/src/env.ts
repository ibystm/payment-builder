import * as serviceAccountDev from "./db/serviceAccounts/serviceAccount.json";
// import * as serviceAccountProd from "../src/firestore/serviceAccounts/production/prod_serviceAccount.json";
import { Firebase } from "./db/firebase";

export enum EnvDef {
  DEVELOP = "DEVELOP",
  // PRODUCTION = "PRODUCTION", // 一旦定義だけしておく
}

type EnvData = {
  firebase: FirebaseData;
  // serviceAccount: any;
};

type FirebaseData = {
  serviceAccount: any;
};

// type FirebaseDef = "develop"; //| "production";

const envSelection: { [env in EnvDef]: EnvData } = {
  [EnvDef.DEVELOP]: {
    firebase: {
      serviceAccount: serviceAccountDev,
    },
  },
};

export class Env {
  private static currentEnv: EnvData;
  private static currentEnvDef: EnvDef;
  public static getCurrentEnv = () => Env.currentEnv;
  public static getCurrentEnvDef = () => Env.currentEnvDef;
  public static init = (env: EnvDef) => {
    const envData = envSelection[env];
    Env.currentEnv = envData;
    Env.currentEnvDef = env;
    Firebase.init(envData.firebase.serviceAccount);
  };
}
