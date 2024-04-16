$(function() {
  // drawerjs
  $( '.drawer' ).drawer()
  
  //smoothscroll
  $('a[href^="#"]').click(function() {
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top;
    $("html, body").animate(
      {
        scrollTop: position - $( '#js-header' ).outerHeight()
      },
      speed
      );
      return false
    });

    // wow.js
    new WOW().init()
    //googleform
    let $form = $( '#js-form' )
    $form.submit(function (e) { 
      $.ajax({ 
       url: $form.attr('action'), 
       data: $form.serialize(), 
       type: "POST", 
       dataType: "xml", 
       statusCode: { 
          0: function() { 
            //送信に成功したときの処理 
            $form.slideUp()
            $( '#js-success' ).slideDown()
          }, 
          200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp()
            $( '#js-error' ).slideDown()
          }
        } 
      });
      return false; 
    }); 

    // formの入力確認
    let $submit = $( '#js-submit' )
    $( 'js-form input, #js-form textarea' ).on( 'change', function() {
      if(
        $( '#js-form input[type="text"]' ).val() !== "" &&
        $( '#js-form input[type="email"]' ).val() !== "" &&
        $( '#js-form input[name="entry.822823140"]' ).prop( 'checked' ) === true
      ) {
        //全て入力された時
        $submit.prop( 'disabled', false )
        $submit.addClass( '-active' )
        
      } else {
        //入力されていない時
        $submit.prop( 'disabled', true )
        $submit.removeClass( '-active' )
      }
    });
});