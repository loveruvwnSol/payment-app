// id取得
class PaymentApp {
  constructor() {
    this.title = document.getElementById("outputTitle");  // タイトルテキスト
    this.select_text = document.getElementById("outputSelectText"); // サブテキスト
    this.dutchTreatButton = document.getElementById("dutchTreatButton");  // 割り勘ボタン
    this.graceButton = document.getElementById("graceButton"); // 奢りボタン
    this.amountOfMoneyBox = document.getElementById("amountOfMoneyBox"); // 金額入力テキストボックス
    this.DTNumberOfPeopleBox = document.getElementById("DTNumberOfPeopleBox"); // 割り勘人数入力テキストボックス
    this.dutchTreatDecisionButton = document.getElementById("dutchTreatDecisionButton"); // 割り勘結果表示ボタン
    this.GRCNumberOfPeopleBox = document.getElementById("GRCNumberOfPeopleBox"); // 奢り人数入力テキストボックス
    this.graceNextPageButton = document.getElementById("graceNextPageButton"); // 奢りページ遷移ボタン
    this.inputName = document.getElementById("inputName");
    this.nameBox = document.getElementById("nameBox"); // 名前入力テキストボックス
    this.graceDecisionButton = document.getElementById("graceDecisionButton"); // 奢り結果表示ボタン
    this.resultText = document.getElementById("resultText"); // 結果テキスト
    this.backButton = document.getElementById("backButton"); // 戻るボタン
    this.errorText = document.getElementById("errorText"); // エラーテキスト
  }

  // 割り勘ボタンが押されたら実行
  startDutchTreat() {
    // innerHTMLでテキストを書き換え
    this.title.innerHTML = "支払い金額と人数を入力してください";
    this.select_text.innerHTML = "";

    // 割り勘ボタンと奢りボタンの削除
    this.dutchTreatButton.style.display = "none";
    this.graceButton.style.display = "none";

    // textboxと決定ボタンを追加
    this.dutchTreatDecisionButton.style.display = "flex";
    this.amountOfMoneyBox.style.display = "flex";
    this.amountOfMoneyBox.style.color = "#000000";
    this.DTNumberOfPeopleBox.style.display = "flex";
    this.DTNumberOfPeopleBox.style.color = "#000000";
    this.backButton.style.display = "flex";
  }

  // 割り勘の結果
  dutchTreatSubmit() {
    // textboxに入力された数値を取得
    const en = this.amountOfMoneyBox.value;
    const people = this.DTNumberOfPeopleBox.value;

    // 合計金額 ÷ 人数で1人当たりの支払金額を求める
    const dutchTreatResult = en / people;

    // テキストの書き換えと支払い金額の表示
    this.title.innerHTML = "1人あたりの支払額";
    this.resultText.innerHTML = dutchTreatResult + "円";

    // 戻るボタンの追加
    this.backButton.style.display = "flex";

    // テキストボックスと決定ボタンの削除
    this.amountOfMoneyBox.style.display = "none";
    this.DTNumberOfPeopleBox.style.display = "none";
    this.dutchTreatDecisionButton.style.display = "none";

    // 数値が入力されなかったらエラーテキストを表示
    if (en == "" || people == "") {
      this.title.innerHTML = "支払い金額と人数を入力してください";
      this.resultText.innerHTML = "";
      this.dutchTreatDecisionButton.style.display = "flex";
      this.amountOfMoneyBox.style.display = "flex";
      this.amountOfMoneyBox.style.color = "#000000";
      this.DTNumberOfPeopleBox.style.display = "flex";
      this.DTNumberOfPeopleBox.style.color = "#000000";
      this.errorText.innerHTML = "入力されていません";
    }
    else {
      this.errorText.innerHTML = "";
    }
  }

  // 奢りボタンが押されたら実行
  startGrace() {
    // innerHTMLでテキストを書き換え
    this.title.innerHTML = "人数を入力してください";
    this.select_text.innerHTML = "";

    // 割り勘ボタンと奢りボタンの削除
    this.dutchTreatButton.style.display = "none";
    this.graceButton.style.display = "none";

    // textboxと決定ボタン、戻るボタンを追加
    this.GRCNumberOfPeopleBox.style.display = "flex";
    this.GRCNumberOfPeopleBox.style.color = "#000000";
    this.backButton.style.display = "flex";
    this.graceNextPageButton.style.display = "flex";
  }

  // ページ遷移ボタンが押されたら実行
  GraceNextPage() {
    // textboxに入力された数値を取得
    const peopeNPO = this.GRCNumberOfPeopleBox.value;

    // innerHTMLでテキストを書き換え
    this.title.innerHTML = "名前を入力してください";

    this.nameBox.style.display = "flex";
    this.nameBox.style.color = "#000000";
    this.graceDecisionButton.style.display = "flex";

    // textboxとページ遷移ボタンの削除
    this.graceNextPageButton.style.display = "none";
    this.GRCNumberOfPeopleBox.style.display = "none";

    // 数値が入力されなかったらエラーテキストを表示
    if (peopeNPO == "") {
      this.title.innerHTML = "人数を入力してください";
      this.resultText.innerHTML = "";
      this.GRCNumberOfPeopleBox.style.display = "flex";
      this.GRCNumberOfPeopleBox.style.color = "#000000";
      this.graceNextPageButton.style.display = "flex";
      this.nameBox.style.display = "none";
      this.graceDecisionButton.style.display = "none";
      this.errorText.innerHTML = "入力されていません";
    }
    else {
      this.errorText.innerHTML = "";
    }
  }

  // 奢りの結果
  GraceSubmit() {


    // if ( == ""){
    //   this.title.innerHTML = "名前を入力してください";
    //   this.resultText.innerHTML = "";
    //   this.nameBox.style.display = "flex";
    //   this.graceDecisionButton.style.display = "flex";
    //   this.backButton.style.display = "flex";
    //   this.errorText.innerHTML = "入力されていません";
    // }
    // else {
    //   this.errorText.innerHTML = "";
    // }
  }
}

window.onload = function () {
  const app = new PaymentApp();
  app.dutchTreatButton.addEventListener("click", () => app.startDutchTreat());
  app.dutchTreatDecisionButton.addEventListener("click", () => app.dutchTreatSubmit());
  app.graceButton.addEventListener("click", () => app.startGrace());
  app.graceNextPageButton.addEventListener("click", () => app.GraceNextPage());
  app.graceDecisionButton.addEventListener("click", () => app.GraceSubmit());
  app.backButton.addEventListener("click", () => location.reload());
};
