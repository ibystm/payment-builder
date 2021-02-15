import { FirestoreDocumentData } from "../commonTypes/firestoreTypes";
import { apiTypesPayment } from "../../api/apiTypes/paymentTypes";

export type FirestorePayments = apiTypesPayment & {
  isPaymentComplete: boolean;
} & FirestoreDocumentData;

export type Category =
  | "food" // 食費
  | "living" //生活用品
  | "transportation" // 交通費
  | "furnitureAndAppliances" //　家具家電
  | "utility" //　光熱費
  | "hobbyAndCulture" //趣味教養
  | "leisure" // レジャー
  | "rent" // 家賃
  | "communication"; //　通信費

export type FixedCostSettings =
  | "beginningOfMonth" // 月初
  | "middleOfMonth" // フロント上では15日で選択する
  | "endOfMonth"; // 月末
