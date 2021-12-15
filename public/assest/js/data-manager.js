/*** -- データの管理 / data-manager -- ***/
/* 
1.0 整数乱数生成
1.1 初回アクセス時にID生成
1.2 データまわりの処理
    -- .0 送信ボタンのクリックイベント
    -- .1 Firestoreにデータを追加
    -- .2 全ての追加データを整形してリターン
    -- .3 アンケート結果のパラメータのみ整形
    -- .4 ロボットのパラメータのみ整形 
    -- .5 データの整合性確認
*/

import db from "/assest/js/firebase.js";

// -- 1.0 整数乱数生成
function getRandomInt(max) {
  // Math.floor: 与えられた数値以下の最大の整数を返す
  return Math.floor(Math.random() * max);
}

// -- 1.1 初回アクセス時にID生成
let id = String(getRandomInt(100000)); // idはString
let idDocumentRef = db.collection("users").doc(id);
let idFlag = false; // ファイルが存在する場合にループを終了
if (localStorage.getItem("id")) {
  id = localStorage.getItem("id");
  // ☆サイトをDisabledにする
  // ☆タスク - 実験完了ページの作成
} else {
  for (let i = 0; i < 20; i++) {
    idDocumentRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          id = String(getRandomInt(100000));
          console.log("Document data:", doc.data());
        } else {
          localStorage.setItem("id", id);
          idFlag = true;
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    if (idFlag) {
      break;
    }
  }
}

// -- 1.2 データまわりの処理
// 1.2.0 送信ボタンのクリックイベント
const sendButton = document.getElementById("send-button");
sendButton.onclick = function () {
  sessionStorage.setItem("send_time", Date.now());
  if (dataConsistency()) {
    dataSend();
    changeAfterSending();
  } else {
    console.log("Error: データに不整合が見られたため, データを送信できません.");
    console.log(dataFormat());
  }
};

// 1.2.1 Firestoreにデータを追加
function dataSend() {
  db.collection("users")
    .doc(id)
    .set(dataFormat())
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

// 1.2.2 全ての追加データを整形
function dataFormat() {
  return {
    name: sessionStorage.getItem("name"),
    age: sessionStorage.getItem("age"),
    creation_time: Date(sessionStorage.getItem("creation_time")),
    send_time: Date(sessionStorage.getItem("send_time")),
    work_time: sessionStorage.getItem("send_time") - sessionStorage.getItem("creation_time"),
    quetionnarie: sessionStorage.getItem("quetionnarie"),
    adjective_pairs: sessionStorage.getItem("adjective_pairs"),
    robot_parameter: localStorage.getItem("robot_parameter"),
  };
}

// 1.2.3 アンケート結果のパラメータを整形
function quetionnarieFormat() {
  // 質問事項の配列(quetionnarieArray)への追加
  let elm = document.getElementsByName("quetionnarie-radio");
  let len = elm.length;
  let quetionnarieArray = new Array();
  for (let i = 0; i < len; i++) {
    if (elm.item(i).checked) {
      quetionnarieArray.push(elm.item(i).value);
    }
  }

  // -- テキストの配列(quetionnarieArray)への追加 --
  // Q1：名前のみ例外的にsessionStorageに追加
  sessionStorage.setItem(
    "name",
    document.getElementById("name-text-field").value
  );
  // Q3：メールアドレス(mail-address)
  quetionnarieArray.push(document.getElementById("mail-address").value);
  // Q4：紹介者(introducer)
  quetionnarieArray.push("紹介者" + document.getElementById("introducer").value);
  // Q12.1 理由
  quetionnarieArray.push("Q12の理由:" + document.getElementById("q12-1").value);
  // Q13 作成したロボットの大きさ
  quetionnarieArray.push(document.getElementById("q13").value);
  // Q14.1 理由
  quetionnarieArray.push("Q14の理由:" + document.getElementById("q14-1").value);

  //　アンケート(quetionnarie)をsessionStorageに追加
  sessionStorage.setItem("quetionnarie", quetionnarieArray);
}

// 1.2.4 ロボットのパラメータを整形
function robotParaFormat() {
  let array = [];
  // Face：顔
  array.push(sessionStorage.getItem("faceTemp"));
  array.push(sessionStorage.getItem("faceColor"));
  array.push(sessionStorage.getItem("faceY"));
  // Eye：目
  array.push(sessionStorage.getItem("eyeTemp"));
  array.push(sessionStorage.getItem("eyeColor"));
  array.push(sessionStorage.getItem("eyeY"));
  array.push(sessionStorage.getItem("eyeX"));
  array.push(sessionStorage.getItem("eyeMag"));
  // Mouse：口
  array.push(sessionStorage.getItem("mouseTemp"));
  array.push(sessionStorage.getItem("mouseColor"));
  array.push(sessionStorage.getItem("mouseY"));
  array.push(sessionStorage.getItem("mouseHeight"));
  array.push(sessionStorage.getItem("mouseWidth"));
  // Body：体
  array.push(sessionStorage.getItem("bodyTemp"));
  array.push(sessionStorage.getItem("bodyColor"));
  array.push(sessionStorage.getItem("bodyY"));
  array.push(sessionStorage.getItem("bodyHeight"));
  array.push(sessionStorage.getItem("bodyWidth"));

  console.log(array);

  localStorage.setItem("robot_parameter", array);
}

// 1.2.5 データの整合性確認
function dataConsistency() {
  quetionnarieFormat();
  robotParaFormat();
  if (!sessionStorage.getItem("name")) {
    console.log("name format error");
    return false;
  }
  if (!sessionStorage.getItem("age")) {
    console.log("age format error");
    return false;
  }
  if (!sessionStorage.getItem("creation_time")) {
    console.log("creation_time format error");
    return false;
  }
  if (!sessionStorage.getItem("send_time")) {
    console.log("send_time format error");
    return false;
  }
  // if (!sessionStorage.getItem("quetionnarie")) {
  //   return false;
  // }
  if (!sessionStorage.getItem("adjective_pairs")) {
    console.log("adjective_pairs format error");
    return false;
  }
  if (!localStorage.getItem("robot_parameter")) {
    console.log("robot_parameter format error");
    return false;
  }
  return true;
}

// 1.2.6 データを送信後の変更(ボタンのアイコンとテキスト)
function changeAfterSending() {
  let elmText = document.getElementById("send-text");
  elmText.textContent = "実験終了";

  let elmIcon = document.getElementById("send-icon");
  elmIcon.textContent = "check"
}