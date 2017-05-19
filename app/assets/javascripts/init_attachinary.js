$(document).ready(function() {
  $('.attachinary-input').attachinary({
    dropZone: $('#dropzone')
  }).bind('fileuploaddone', function (e, data) {
    $('#dropzone').hide();
    $('a').click(function(e) {
      $('#dropzone').show();
    })
  })

});
