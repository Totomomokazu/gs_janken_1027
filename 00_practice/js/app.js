/**
 * 共通変数
 */
var counter = 0; //カウントする
var user_result = []; //ユーザーの結果を入れる
var user_wincount = 0; //ユーザーが勝った回数をカウントする
var npc_result = []; //PCの結果を入れる
var npc_wincount = 0; //PCが買った結果を入れる

/**
 * じゃんけん処理
 * @param user_num: 押下されたボタンの値を説明している。
 * @return HTMLに返す値を定義している
 */


/**
 * 値を出力用テキストに変換する処理
 * @param num: 値(整数)
 * @return String
 */
function changeText(num){ //ここでボタンで送られた値から文字に変更している。
    var item = "";
    switch (num){
      case 0: item = "ぐー"; break;
      case 1: item = "ちょき"; break;
      case 2: item = "ぱー"; break;
      default: item = "不正な値を検出";
    }
    return item;
  }


function janken(user_num){  //ここでjankenという関数を定義する。user_numで関数を受け取る

  // 乱数で今NPC側の値を取得
  var npc_num = Math.floor(Math.random() * 3); //コンピュータの手を乱数で生成

  // 出力用
  var resultHTML = "";
  var final_resultHTML = "";

  resultHTML += "[あなた: " + changeText(user_num) + " ] VS [相手: " + changeText(npc_num) + " ]<br>"; 
  //ここにチェンジテキストの関数を呼び出して、htmlボタンから送られてきた値を文章へ変更しているらしい



  // 勝ち負け判定
  if(user_num == npc_num) {
    // 引き分け
    // 各配列に結果を格納
    user_result.push("引き分け"); //user_resultに結果を入れている
    npc_result.push("引き分け");
  } else if((user_num == 0 && npc_num == 1)||(user_num == 1 && npc_num == 2)||(user_num == 2 && npc_num == 0)) { //ここでユーザーの勝ち条件を定義している
    // 勝ち
    // プレイヤーのカウンター値を加算
    user_wincount++;
    // 各配列に結果を格納
    user_result.push("勝ち");
    npc_result.push("負け");
  } else {
    // 負け
    // NPCのカウンター値を加算
    npc_wincount++;
    // 各配列に結果を格納
    user_result.push("負け");
    npc_result.push("勝ち");
  }

  // 全体カウンター値を加算。勝負している回数を計算
  
  
  
  
  
  counter++;
  resultHTML += "成績（あなた）：" + user_result.toString() + "<br>"; //brはhtmlに読ませるために改行している。
  resultHTML += "成績（相手）：" + npc_result.toString(); //user_resultはfinction（janken）外の共通の変数として使われている。resultHTMLはfunctin内で再定義しているため、最初から「成績（あなた）：」という文章を入れる必要がある
  
  // 結果出力
  document.getElementById("result").innerHTML = resultHTML; 

  // 終了判定
  if(user_wincount == 3 || npc_wincount == 3){
    if(user_wincount == 3){
      final_resultHTML += "あなたの勝ちです!!<br>"  
    } else if(npc_wincount == 3){
      final_resultHTML += "あなたの負けです...<br>"  
    }
    final_resultHTML += "処理回数：" + counter + "回<br>";
    // 処理結果出力
    document.getElementById("final_result").innerHTML = final_resultHTML;
    
    // 各ボタンを非活性化する
    document.getElementById("0").setAttribute("disabled", true);
    document.getElementById("1").setAttribute("disabled", true);
    document.getElementById("2").setAttribute("disabled", true);
  }

}


