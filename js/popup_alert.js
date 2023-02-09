$(document).ready(function(){
  /* popup : basic */
  $(document).on('click', '.btn_popup_close', function(){
    $(this).parents('.popup_wrap').hide();
  });

  $(document).on('click', '.popup_wrap', function(e){
    if(!$(e.target).parents().hasClass('popup_box')){
      $(this).hide();
    }
  });
  /* popup : end */

  /* bottom popup */
  $(document).on('click', '.btn_btm_popup_close', function(){
    var $this = $(this);
    if(parseInt($this.parents('.btm_popup').css('bottom')) >= 0){
      $this.parents('.btm_popup').css('bottom', '0%').css('top', 'auto');
      $this.parents('.btm_popup').stop().animate({'bottom' : '-100%'}, 500);
    }else{
      $this.parents('.btm_popup').hide();
    }

    if($this.parents('.btm_popup_wrap').length > 0){
      setTimeout(function(){
        $this.parents('.btm_popup_wrap').stop().animate({'opacity' : 0}, 300, function(){
          $this.parents('.btm_popup_wrap').hide();
        });
      }, 200);
    }
  });
  /* bottom popup : end */
});
/* popup : basic */
function displayElement(element){
  $('#'+element).show();
}
/* popup : end */

/* bottom popup */
function displayBtmPopup(element){
  var $this = $('#'+element);
  var $popup = $('#'+element);
  var contentHeight = 0;

  if($this.hasClass('btm_popup_wrap')){
    $this.show();
    $this.stop().animate({'opacity' : 1}, 300);

    $popup = $this.find('.btm_popup');
  }

  $popup.stop().animate({'bottom' : '0%'}, 500, function(){
    contentHeight = $popup.find('.com_guide').outerHeight();

    if(contentHeight > 600) contentHeight = 600;
    $popup.height(contentHeight);
  });
}
/* bottom popup : end */
