$(function(){
    $('.question').on('click', function() {
        // questionをクリックしたら   
        $(this).toggleClass('open');     
        // 「クラス名：open」が表示されている場合は非表示に、非表示の場合は表示する
        $(this).next().slideToggle();
        //thisがクリックした要素＝question
        //nextは隣の要素＝クリックしたquestionの隣＝anser


        //以下、他の要素が開いたら、自分は閉じる仕様
        $('.question').not($(this)).next().slideUp();
        //notメソッドでクリックした question 以外を対象にslide upを実行
        $('.question').not($(this)).removeClass('open');
        //同様に、openのクラス名を取っちゃう。※これなくても動くんだけど。
      });
  });