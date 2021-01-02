import { db } from "../firestore/index";
// export default はツリーシェイキングの観点からあまり推奨される書き方ではない
// ツリーシェイキングとは、プロジェクト内に存在する使用されていないコードを破棄すること。
// 目的として、コンパイル後のコードサイズを小さくすることを目的としている。
export class UsersPriceService {
  public static async culculateTotalPrice() {
    const totalPrice = 3000;
    await await db.collection("users").doc("Oe6XKXl31y9TFvMdMADo").get();
    return totalPrice;
  }
}