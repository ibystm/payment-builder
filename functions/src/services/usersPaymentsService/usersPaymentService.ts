import { PaymentTypes } from "../../firestore/types/firestoreUserPayments";

export class UsersPaymentsService {
  public static async postPayment(
    usersId: string,
    paymentRequest: PaymentTypes
  ) {
    // 支払いの追加
    return;
  }
}
