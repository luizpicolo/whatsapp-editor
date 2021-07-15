$(document).ready(function() {
  let input = $("#input-text").whatsappEditor({
    html_content: true
  });
  
  $(document).on('click', '#convert', function() {
    $('#output-text').html(input.getFormattedContent());
  });

  $(document).on('click', '#output-text', function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#output-text').text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Copiado')
  });
})