import { FirestoreDocumentData } from "../commonTypes/firestoreTypes";

export type FirestoreUsersPayments = PaymentTypes & FirestoreDocumentData;

export type PaymentTypes = {
  price: number; // 必ず数字で入力必須とする
  paiedBy: string; // 支払ったユーザーのid
  isAdjustmentComplete: boolean; // 精算が完了しているかどうか
  catogory?: Category;
  memo?: string;
  fixedCostSetting?: FixedCostSettings; // 固定費として追加するかどうか、追加するのであれば、月初め | 15日 | 月末
};

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
