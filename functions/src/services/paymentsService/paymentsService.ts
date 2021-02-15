import { apiTypesPayment } from "../../api/apiTypes/paymentTypes";
import { Firestore } from "../../db/firestore";
import { PAYMENT_COLLECTION } from "../../db/refs/firestoreTypesPayments";
import { FirestorePayments } from "../../db/types/firestoreTypesPayments";

export class PaymentsService {
  /**
   * 支払いの追加処理
   */
  public static async postPayment(paymentRequest: apiTypesPayment) {
    // 支払いの追加
    const data = {
      ...paymentRequest,
      isPaymentComplete: false,
    } as FirestorePayments;
    return await await Firestore.instance()
      .collection(PAYMENT_COLLECTION)
      .add(data)
      .then((res) => {
        console.log("succeed", res);
      })
      .catch((e) => {
        console.error("failed!!!", e);
      });
  }
}
