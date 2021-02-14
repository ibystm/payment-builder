import * as admin from "firebase-admin";

export class Firebase {
  public static init = (serviceAccount: any) => {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        privateKey: serviceAccount.private_key,
        clientEmail: serviceAccount.client_email,
      }),
    });
  };
}

// export const db = admin.firestore();
