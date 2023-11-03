// 変数を宣言する
var user_result = [] //ユーザーの結果を入れる
var pc_result=[] //PCの結果を入れる
var final_reslut =[]//最終的な勝敗を入れる
var count=0 //勝負の回数をカウントする
var user_win_count=0 //userが買った回数をカウントする
var pc_win_count=0 //pcが買った回数をカウントする



//関数を定義する(じゃんけんの結果を判断する)
function janken(user_select){ //user_selectでユーザーが選択した手札を取得
  console.log(user_select,"user_select"); //userがボタンを押下出来ていることを確認

  var pc_select=Math.floor(Math.random() * 3); //pcが選択した手札をランダムで取得
  console.log(pc_select,"pc_select")

  count ++ //勝負した数をカウント
  console.log(count,"勝負した数");


  if ((user_select===0 && pc_select ===1) || (user_select===1 && pc_select ===2)|| (user_select===2 && pc_select ===0)) { //勝利条件を定義
    console.log("プレイヤーの勝ち")
    user_result += "勝ち,"
    pc_result +="負け,"
    user_win_count +=1


    // 勝った場合の結果を表示する
    $(document).ready(function(){
      var imgSrc = "img/kachi.jfif";  // 画像のURL
      var imgElement= $('<img src="' + imgSrc + '" alt="Description" />');//jQueryの一部の要素を変数に入れる


      $('#result').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        // 'height': '100vh'
      }).html(imgElement); //jQueryの一部の要素をここに入れる

      $('#senseki_player').css({
        'text-align': 'center',
      }).html("あなたの結果：｛"+user_result+"}" );
      $('#senseki_pc').css({
        'text-align': 'center',
      }).html("pcの結果：｛"+pc_result+"}" );
      
    });


  
  }else if ((user_select===0 && pc_select ===0) || (user_select===1 && pc_select ===1)|| (user_select===2 && pc_select ===2)){ //引き分け条件を定義
    console.log("引き分け")


    // 引き分けの結果を表示する
    $(document).ready(function(){
      var imgSrc = "img/hikiwake.jfif";  // 画像のURL
      var imgElement= $('<img src="' + imgSrc + '" alt="Description" />');//jQueryの一部の要素を変数に入れる
      user_result += "引き分け,"
      pc_result +="引き分け,"
  

      $('#result').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        // 'height': '100vh'
      }).html(imgElement); //jQueryの一部の要素をここに入れる
    });

    $('#senseki_player').css({
      'text-align': 'center',
    }).html("あなたの結果：｛"+user_result+"}" );
    $('#senseki_pc').css({
      'text-align': 'center',
    }).html("pcの結果：｛"+pc_result+"}" );


    // 別パターン
  //   $(document).ready(function(){
  //     var imgSrc = "img/hikiwake.jfif";  // 画像のURL
  //     $('#result').html('<img src="' + imgSrc + '" alt="Description" />');
  // });

  }else{ //負け条件を定義
    console.log("プレイヤーの負け")
    user_result += "負け,"
    pc_result +="勝ち,"
    pc_win_count +=1 //PCが勝った回数をカウント
    console.log(pc_win_count,"PCが勝った回数をカウント")
    
    // 負けた場合の結果を表示する
    $(document).ready(function(){
      var imgSrc = "img/make.jfif";  // 画像のURL
      var imgElement= $('<img src="' + imgSrc + '" alt="Description" />');//jQueryの一部の要素を変数に入れる

      $('#result').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        // 'height': '100vh'
      }).html(imgElement); //jQueryの一部の要素をここに入れる

      $('#senseki_player').css({
        'text-align': 'center',
      }).html("あなたの結果：｛"+user_result+"}" );
      $('#senseki_pc').css({
        'text-align': 'center',
      }).html("pcの結果：｛"+pc_result+"}" );

    });


  // 別パターン
  //   $(document).ready(function(){
  //     var imgSrc = "img/make.jfif";  // 画像のURL
  //     $('#result').html('<img src="' + imgSrc + '" alt="Description" />');
  // });
  }

  // ユーザーが選択した手札を格納
  var select="" //じゃんけんで選んだ手

  if (user_result ===0){
    select="ぐー"
    console.log(select,"ユーザーはグーを選択しました")
  } else if (user_result ===1){
    select="ちょき"
    console.log(select,"ユーザーはちょきを選択しました")
  } else{
    select="ぱー"
    console.log(select,"ユーザーはぱーを選択しました")
  }

  if(count>=6){
    if(user_win_count>pc_win_count){
      console.log("あなたの勝ち");
      final_reslut = "この勝負はあなたの勝利です！！"

      $(document).ready(function(){
        $('#final_result').css({
          'text-align': 'center',
        }).html(final_reslut);
        $('.btn').prop('disabled', true);
       });


    }else if(user_win_count===pc_win_count){
      console.log("勝負は引き分けです。")
      final_reslut = "この勝負は引き分けです！！"


      $(document).ready(function(){
        $('#final_result').css({
          'text-align': 'center',
        }).html(final_reslut);
        $('.btn').prop('disabled', true);
      });


    }else{
      console.log("あなたの負け")
      final_reslut = "この勝負はあなたの負けです！！"


      $(document).ready(function(){
        $('#final_result').css({
          'text-align': 'center',
        }).html(final_reslut);
        $('.btn').prop('disabled', true);
      });

    }
  }
}
