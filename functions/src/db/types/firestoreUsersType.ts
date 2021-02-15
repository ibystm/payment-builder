import { FirestoreDocumentData } from "../commonTypes/firestoreTypes";

export type FirestoreUsersTypes = {
  id: string;
  name: string;
  totalDebts: number; // 0のときに支払い完了を表す
  pairedWith?: string; // パートナーのuserId
} & FirestoreDocumentData;
