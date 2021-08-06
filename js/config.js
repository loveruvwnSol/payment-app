class PaymentApp {
  constructor() {
    this.title = document.getElementById("output_title");
    this.select_text = document.getElementById("output_select_text");
    this.DutchTreatButton = document.getElementById("DutchTreatButton");
    this.GraceButton = document.getElementById("GraceButton");
    this.DutchTreatDecisionButton = document.getElementById("DutchTreatDecisionButton");
    this.GraceDecisionButton = document.getElementById("GraceDecisionButton");
    this.AmountOfMoneyBox = document.getElementById("AmountOfMoneyBox");
    this.NumberOfPeopleBox = document.getElementById("NumberOfPeopleBox");
    this.resultText = document.getElementById("resultText");
    this.backButton = document.getElementById("backButton");
  }

  // 割り勘ボタンが押されたら実行
  startDutchTreat() {
    // innerHTMLでテキストを書き換え
    this.title.innerHTML = "支払い金額と人数を入力してください";
    this.select_text.innerHTML = "";

    // 割り勘ボタンと奢りボタンを消す
    this.DutchTreatButton.style.display = "none";
    this.GraceButton.style.display = "none";

    // textboxと決定ボタンを追加
    this.DutchTreatDecisionButton.style.display = "flex";
    this.AmountOfMoneyBox.style.display = "flex";
    this.NumberOfPeopleBox.style.display = "flex";
    this.backButton.style.display = "flex";
  }

  // 割り勘の結果
  dutchTreatSubmit() {
    const en = this.AmountOfMoneyBox.value;
    const people = this.NumberOfPeopleBox.value;
    const result = en / people;

    // テキストの書き換えと支払い金額の表示
    this.title.innerHTML = "1人あたりの支払額";
    this.resultText.innerHTML = result + "円";

    // 戻るボタンの追加
    this.backButton.style.display = "flex";

    // テキストボックスと決定ボタンの削除
    this.AmountOfMoneyBox.style.display = "none";
    this.NumberOfPeopleBox.style.display = "none";
    this.DutchTreatDecisionButton.style.display = "none";
  }

  // 奢りボタンが押されたら実行
  startGrace() {
    // innerHTMLでテキストを書き換え
    this.title.innerHTML = "人数を入力してください";
    this.select_text.innerHTML = "";

    // 割り勘ボタンと奢りボタンを消す
    this.DutchTreatButton.style.display = "none";
    this.GraceButton.style.display = "none";

    // textboxと決定ボタンを追加
    this.GraceDecisionButton.style.display = "flex";
    this.NumberOfPeopleBox.style.display = "flex";
  }
}

window.onload = function () {
  const app = new PaymentApp();
  app.DutchTreatButton.addEventListener("click", () => app.startDutchTreat());
  app.GraceButton.addEventListener("click", () => app.startGrace());
  app.DutchTreatDecisionButton.addEventListener("click", () =>app.dutchTreatSubmit());
  app.backButton.addEventListener("click", () => location.reload());
};
