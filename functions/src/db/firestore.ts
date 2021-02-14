import * as admin from "firebase-admin";

export class Firestore {
  public static instance = () => admin.firestore();
}
