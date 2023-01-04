var copy_btn = document.querySelector('.copy')
copy_btn.addEventListener('click', function(){
  var copyText = document.querySelector('.short_url').innerHTML;
  navigator.clipboard.writeText(copyText);
})