class PaymentApp {
  // id取得
  constructor() {
    this.countText = 2; // カウンター
    this.anyTexts = document.getElementById("anyTexts"); // 複数のテキスト
    this.title = document.getElementById("outputTitle"); // タイトルテキスト
    this.select_text = document.getElementById("outputSelectText"); // サブテキスト
    this.dutchTreatButton = document.getElementById("dutchTreatButton"); // 割り勘ボタン
    this.graceButton = document.getElementById("graceButton"); // 奢りボタン
    this.amountOfMoneyBox = document.getElementById("amountOfMoneyBox"); // 金額入力テキストボックス
    this.DTNumberOfPeopleBox = document.getElementById("DTNumberOfPeopleBox"); // 割り勘人数入力テキストボックス
    this.dutchTreatDecisionButton = document.getElementById("dutchTreatDecisionButton"); // 割り勘結果表示ボタン
    this.addTextboxButton = document.getElementById("addTextboxButton");
    this.inputName = document.getElementById("inputName"); // 名前入力テキストボックスを囲うdivId
    this.nameBox = document.getElementById("1nameBox"); // 名前入力テキストボックス
    this.graceDecisionButton = document.getElementById("graceDecisionButton"); // 奢り結果表示ボタン
    this.resultText = document.getElementById("resultText"); // 結果テキスト
    this.backButton = document.getElementById("backButton"); // 戻るボタン
    this.errorText = document.getElementById("errorText"); // エラーテキスト
  }

  // 割り勘ボタンが押されたら実行
  startDutchTreat() {
    // テキストを書き換え
    this.title.innerHTML = "支払い金額と人数を入力してください";
    this.select_text.innerHTML = "";

    // heightの調整
    this.anyTexts.style.height = "40vh";

    // 割り勘ボタンと奢りボタンの削除
    this.dutchTreatButton.style.display = "none";
    this.graceButton.style.display = "none";

    // textboxと決定ボタン、戻るボタンを追加
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

    // heightの調整
    this.anyTexts.style.height = "60vh";

    // テキストボックスと決定ボタンの削除
    this.amountOfMoneyBox.style.display = "none";
    this.DTNumberOfPeopleBox.style.display = "none";
    this.dutchTreatDecisionButton.style.display = "none";

    // 数値が入力されなかったらエラーテキストを表示、画面の切り替えを無効
    if (en == "" || people == "") {
      this.title.innerHTML = "支払い金額と人数を入力してください";
      this.resultText.innerHTML = "";
      this.dutchTreatDecisionButton.style.display = "flex";
      this.amountOfMoneyBox.style.display = "flex";
      this.amountOfMoneyBox.style.color = "#000000";
      this.DTNumberOfPeopleBox.style.display = "flex";
      this.DTNumberOfPeopleBox.style.color = "#000000";
      this.errorText.innerHTML = "入力されていません";
      this.anyTexts.style.height = "40vh";
    } else {
      this.errorText.innerHTML = "";
    }
  }

  // 奢りボタンが押されたら実行
  startGrace() {
    // テキストを書き換え
    this.title.innerHTML = "名前を入力してください";
    this.select_text.innerHTML = "";

    // heightの調整
    this.anyTexts.style.height = "40vh";

    // 割り勘ボタンと奢りボタンの削除
    this.dutchTreatButton.style.display = "none";
    this.graceButton.style.display = "none";

    // textboxと決定ボタン、戻るボタンを追加
    this.nameBox.style.display = "flex";
    this.nameBox.style.color = "#000000";
    this.backButton.style.display = "flex";
    this.addTextboxButton.style.display = "flex";
    this.graceDecisionButton.style.display = "flex";
  }

  // 奢り 人数追加
  addTextbox() {
    // 新しい要素を作成
    var newTextbox = document.createElement("input");
    newTextbox.setAttribute("type", "text");
    newTextbox.setAttribute("id", this.countText + "nameBox");
    newTextbox.setAttribute("class", "textbox");
    newTextbox.setAttribute("placeholder", this.countText + "人目の名前を入力");
    newTextbox.style.display = "flex";
    newTextbox.style.color = "#000000";

    // DOMに新しく作られた要素とその内容を追加
    var currentTextbox = document.getElementById("inputName");
    currentTextbox.appendChild(newTextbox);
    this.countText = this.countText + 1;
  }

  // 奢りの結果
  GraceSubmit() {
    // textboxに入力された名前が入っている配列
    const NameArray = [];
    for (let i = 1; i < this.countText; i++) {
      // textboxに入力された値の取得
      var getName = document.getElementById(i + "nameBox").value;
      var firstNameBox = this.nameBox.value;
      // 入力された値を配列に追加
      NameArray.push(getName);
    }
    // 配列の中の要素をランダムで取得
    const GraceResult = (NameArray[Math.floor(Math.random() * NameArray.length)]);

    // テキストを書き換え
    this.title.innerHTML = "今回奢る人は";
    this.resultText.innerHTML = GraceResult + "さん";

    // heightの調整
    this.anyTexts.style.height = "60vh";

    // textboxとボタンの削除
    this.nameBox.style.display = "none";
    this.addTextboxButton.style.display = "none";
    this.graceDecisionButton.style.display = "none";
    this.inputName.style.display = "none";

    // 名前が入力されていなかったらエラーテキストを表示、画面の切り替えを無効
    if (firstNameBox == "" || getName == "") {
      this.title.innerHTML = "名前を入力してください";
      this.resultText.innerHTML = "";
      this.addTextboxButton.style.display = "flex";
      this.nameBox.style.display = "flex";
      this.inputName.style.display = "inline-block";
      this.graceDecisionButton.style.display = "flex";
      this.errorText.innerHTML = "入力されていません";
      this.anyTexts.style.height = "40vh";
    } else {
      this.errorText.innerHTML = "";
    }
  }
}

window.onload = function () {
  const app = new PaymentApp();
  app.dutchTreatButton.addEventListener("click", () => app.startDutchTreat());
  app.dutchTreatDecisionButton.addEventListener("click", () => app.dutchTreatSubmit());
  app.graceButton.addEventListener("click", () => app.startGrace());
  app.addTextboxButton.addEventListener("click", () => app.addTextbox());
  app.graceDecisionButton.addEventListener("click", () => app.GraceSubmit());
  app.backButton.addEventListener("click", () => location.reload());
};
