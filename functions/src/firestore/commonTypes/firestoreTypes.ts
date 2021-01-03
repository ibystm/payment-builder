import { Timestamp } from "@firebase/firestore-types";

export type FirestoreDocumentData = {
  id: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  deletedAt?: Timestamp;
};
