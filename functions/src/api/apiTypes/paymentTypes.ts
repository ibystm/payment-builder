import {
  Category,
  FixedCostSettings,
} from "../../db/types/firestoreTypesPayments";

export type apiTypesPayment = {
  amount: string;
  paidBy: string; // 支払ったユーザーのid
  catogory?: Category;
  memo?: string;
  fixedCostSetting?: FixedCostSettings; // 固定費として追加するかどうか、追加するのであれば、月初め | 15日 | 月末
};
