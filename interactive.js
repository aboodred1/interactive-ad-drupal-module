
(function ($) {
  Drupal.behaviors.interactive = {
    attach: function (context) {
      
      
      if($('#edit-field-interactive-ad-brightcove').length > 0) {
        $('#edit-field-interactive-ad-brightcove').hide();
        if($('#edit-field-interactive-ad-has-video-und:checked').length > 0) {
          $('#edit-field-interactive-ad-brightcove').show();
        }
      }
      
      if($('#edit-field-interactive-ad-has-video-und').length > 0) {
        $('#edit-field-interactive-ad-has-video-und').click(function(){
          if(this.checked) {
              $('#edit-field-interactive-ad-brightcove').show();
          } else {
            var con = window.confirm('All videos will be cleared. Are you sure you want to proceed?');
              
            if(con) {
              $('#edit-field-interactive-ad-brightcove').hide();
              
              $('#edit-field-interactive-ad-brightcove input:text').val('') ;
            }
          }
        });
      }
      
    }
  };
})(jQuery);