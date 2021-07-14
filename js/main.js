$(document).ready(function () {
  let input = $("#input-text").whatsappEditor({
    html_content: true
  });
  
  $(document).on('click', '#convert', function() {
    $('#output-text').html(input.getFormattedContent());
  });
})