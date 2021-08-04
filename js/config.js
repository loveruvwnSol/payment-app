// 割り勘ボタンが押されたら実行
function startDutchTreat(){
    let title = document.getElementById("output_title");
    let select_text = document.getElementById("output_select_text");
    let DutchTreatButton = document.getElementById("DutchTreatButton");
    let GraceButton = document.getElementById("GraceButton");
    let DecisionButton = document.getElementById("DecisionButton");
    let AmountOfMoneyBox = document.getElementById("AmountOfMoneyBox");
    let NumberOfPeopleBox = document.getElementById("NumberOfPeopleBox");

    // innerHTMLでテキストを書き換え
    title.innerHTML = "支払い金額と人数を入力してください";
    select_text.innerHTML = "";

    // 割り勘ボタンと奢りボタンを消す
    DutchTreatButton.style.display = "none";
    GraceButton.style.display = "none";

    // textboxと決定ボタンを追加
    DecisionButton.style.display = "flex";
    AmountOfMoneyBox.style.display = "flex";
    NumberOfPeopleBox.style.display = "flex";
}

// textboxのvalueのクリア
function clickAmountOfMoneyBox(){
    AmountOfMoneyBox.value = "";

}
function clickNumberOfPeopleBox(){
    NumberOfPeopleBox.value = "";
}

// 奢りボタンが押されたら実行
function startGrace(){

    let title = document.getElementById("output_title");
    let select_text = document.getElementById("output_select_text");
    let DutchTreatButton = document.getElementById("DutchTreatButton");
    let GraceButton = document.getElementById("GraceButton");
    let DecisionButton = document.getElementById("DecisionButton");
    let AmountOfMoneyBox = document.getElementById("AmountOfMoneyBox");
    let NumberOfPeopleBox = document.getElementById("NumberOfPeopleBox");

    // innerHTMLでテキストを書き換え
    title.innerHTML = "人数を入力してください";
    select_text.innerHTML = "";

    // 割り勘ボタンと奢りボタンを消す
    DutchTreatButton.style.display = "none";
    GraceButton.style.display = "none";

    // textboxと決定ボタンを追加
    DecisionButton.style.display = "flex";
    NumberOfPeopleBox.style.display = "flex";
}