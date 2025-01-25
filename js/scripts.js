//フォームの要素をチェックしてリダイレクトを行う関数
function contentsCheck(userInput) {
    console.log(userInput);
    if(
        userInput[0] == "" && 
        userInput[1] == "" && 
        userInput[2] == "" && 
        userInput[3] == true &&
        userInput[4] == "#000000" 
    ) {
        window.document.location.href = "AICRJMap6N.html"; //最初のidとpassword
    } else if(
        userInput[0] == "153132" && 
        userInput[1] == "origin" && 
        userInput[2] == "" && 
        userInput[3] == false &&
        userInput[4] == "#000000" 
    ) {
        window.document.location.href = "Nzcpw3lsWt.html"; //2つ目のidとpassword
    } else if(
        userInput[0] == "528952" && 
        userInput[1] == "original" && 
        userInput[2] == "" && 
        userInput[3] == false &&
        userInput[4] == "#000000" 
    ) {
        window.document.location.href = "jy1eK9YGST.html"; //
    } else if(
        userInput[0] == "1463" && 
        userInput[1] == "humour" && 
        userInput[2] == "Today is a fun day." && 
        userInput[3] == false &&
        userInput[4] == "#000000" 
    ) {
        window.document.location.href = "XqgNnZjSVB.html"; //
    }
    else {
        window.document.location.href = "blank.html";
    }
}
//進行状況に応じてフォームのdisableを解除
function statusCheck() {
    if(localStorage.getItem("openPage1") == "true") {
        document.getElementById("id").disabled = false;
        document.getElementById("password").disabled = false;
    }
    if(localStorage.getItem("openPage3") == "true") {
        document.getElementById("comment").disabled = false;
    }
}
//進行状況に応じてメッセージを出力
function message() {
    return "なにもないよ";
}
//localStrageのクリア
function localStorageClear() {
    localStorage.clear();
    window.document.location.href = "";
}