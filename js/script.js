
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    var sc = $(this).scrollTop();
    console.log(sc);
    if ($(this).scrollTop() > 70) {
      $('.header').css("position", "fixed")
      $('.header__inner').css('background', 'rgba(51,51,51,0.5)')
      $('.mlBlock').css('position', 'fixed')
      $('.mlBlock__bgc').css('position', 'fixed')
    } else {
      $('.header').css("position", "static")
      $('.header__inner').css('background', 'initial')
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $(".menu__btn").click(function () {
    $(".menu__btn").toggleClass("act");
    $(".mlBlock").toggleClass("open");
    $(".mlBlock__bgc").toggleClass("open");
  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});
