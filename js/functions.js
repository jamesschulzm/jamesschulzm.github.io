function copy() {
  /* Get the text field */
  var copyText = document.getElementById("myEmail");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Email copiado!");
}
