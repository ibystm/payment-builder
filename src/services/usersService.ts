// export default はツリーシェイキングの観点からあまり推奨される書き方ではない
// ツリーシェイキングとは、プロジェクト内に存在する使用されていないコードを破棄すること。
// 目的として、コンパイル後のコードサイズを小さくすることを目的としている。
export class UsersPriceService {
  public static culculateTotalPrice() {
    const totalPrice = 1000;
    return totalPrice;
  }
}
