$('#placeholder').load('navigation.html');
$('#foot').load('footer.html');
// Event Listener to Process Form Submission

$('#send').on('click', function(e) {
  e.preventDefault();
  const form = new FormData(document.getElementById('email'))
  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(form).toString()
  });
  const $name = $('#item');
  $newP = $(`<p>Thank you ${$name.val()}. I'll be in touch soon.</p>`);
  $('#send').after($newP);
  $("#email").trigger("reset"); //reset form in jQuery.//
});
