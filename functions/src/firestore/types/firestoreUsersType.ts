import { Timestamp } from "@firebase/firestore-types";

export interface firestoreUsersTypes {
  id: string;
  name: string;
  totalDebts: number; // 0のときに支払い完了を表す
  pairedWith?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
