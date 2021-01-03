import { db } from "../firestore/index";

// export default はツリーシェイキングの観点からあまり推奨される書き方ではない
// ツリーシェイキングとは、プロジェクト内に存在する使用されていないコードを破棄すること。
// 目的として、コンパイル後のコードサイズを小さくすることを目的としている。
export class UsersService {
  public static async culculateTotalPrice() {
    const totalPrice = 3000;
    await await db.collection("users").doc("Oe6XKXl31y9TFvMdMADo").get();
    return totalPrice;
  }

  /**
   * userの借金を取得する
   * 1. userのデータを取得する
   * 2. users以下のpaymentsサブコレのisPaymentDone === falseの中で、
   * 　　自分が支払った金額 - 相手が支払った金額で計算して算出する
   * 3.
   * @param usersId
   */
  public static async fetchTotalDebts(usersId: string) {
    const snapshot = await db.collection("users").doc(usersId).get();
    if (!snapshot.exists) return undefined;

    const user = snapshot.data();
    return user;
  }
}
