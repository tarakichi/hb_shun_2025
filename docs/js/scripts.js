//フォームの要素をチェックしてリダイレクトを行う関数
function contentsCheck(userInput) {
    console.log(userInput);
    if(userInput[3] == true) {
        window.document.location.href = "AICRJMap6N.html";
    }
    else {
        window.document.location.href = "blank.html";
    }
}
//進行状況に応じてフォームのdisableを解除
function statusCheck() {
    if(localStorage.getItem("openPage1") == "true") {
        document.getElementById("id").disabled = false;
    }
}
//進行状況に応じてメッセージを出力
function message() {
    return "なにもないよ";
}
//localStrageのクリア
function localStorageClear() {
    localStorage.clear();
}