import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as serviceAccount from "./serviceAccounts/serviceAccount.json";

admin.initializeApp({
  // requireでserviceAccountモジュールを読み込めば、以下のように回りくどいこと（ドットアクセス）しなくてよいが、importに固執したいのでこんな漢字にしている
  credential: admin.credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
});

export const db = admin.firestore();
