//フォームの要素をチェックしてリダイレクトを行う関数
function contentsCheck(userInput) {
    console.log(userInput);
    if(
        userInput[0] == "" && 
        userInput[1] == "" && 
        userInput[2] == "" && 
        userInput[3] == true &&
        document.getElementById("color").disabled == false
    ) {
        let url_string = window.location.href + "VFpmjBJwE4.html";
        let url = new URL(url_string);
        url.searchParams.append("color",userInput[4]);
        window.document.location.href = url.toString(); //色付きのページ
    }
    else if(
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
        window.document.location.href = "jy1eK9YGST.html"; //動画
    } else if(
        userInput[0] == "1463" && 
        userInput[1] == "humour" && 
        userInput[2] == "Today is a fun day." && 
        userInput[3] == false &&
        userInput[4] == "#000000" 
    ) {
        window.document.location.href = "XqgNnZjSVB.html"; //色が変わるページ
    }
    else if(
        userInput[0] == "708090" && 
        userInput[1] == "felicity" && 
        userInput[2] == "Today is a great day." && 
        userInput[3] == false &&
        userInput[4] == "#ff0000" 
    ) {
        window.document.location.href = "2QEJHC1QLV.html"; //clear
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
    if(localStorage.getItem("openPage4") == "true") {
        document.getElementById("color").disabled = false;
    }
}
//進行状況に応じてメッセージを出力
function message() {
    if(localStorage.getItem("openPage5") == "true") {
        return "guestにチェックを入れよう ID Password Commentにはなにも書かないよ";
    }
    if(localStorage.getItem("openPage6") == "true") {
        return "全ての情報を集めよう";
    }
    if(localStorage.getItem("openPage7") == "true") {
        return "全ての情報を集めよう 168...?どこかで見たかもしれない";
    }
    return "なにもないよ😅";
}
//localStrageのクリア
function localStorageClear() {
    localStorage.clear();
    window.document.location.href = "";
}