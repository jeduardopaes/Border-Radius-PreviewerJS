let clayBox = document.getElementById('ClayBox');
let topSlider = document.getElementById('topSlider');
let leftSlider = document.getElementById('leftSlider');
let bottomSlider = document.getElementById('bottomSlider');
let rightSlider = document.getElementById('rightSlider');
let valueRadius = document.getElementById('valueRadius');

let values = [50 + 20, 50 - 20, 50 - 10, 50 + 10, 50 + 30, 50 - 15, 50 + 15, 50 - 30];
let text = `${values[0] + 20}% ${values[1] - 20}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`;
clayBox.style.borderRadius = text;
valueRadius.value = text;

valueRadius.setAttribute('readonly', 'true');

topSlider.oninput = function () {
  values[0] = 50 + parseInt(this.value);
  values[1] = 50 - parseInt(this.value);
  text = `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`;
  clayBox.style.borderRadius = text;
  valueRadius.value = text;
}

leftSlider.oninput = function () {
  values[7] = 50 + parseInt(this.value);
  values[4] = 50 - parseInt(this.value);
  text = `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`;
  clayBox.style.borderRadius = text;
  valueRadius.value = text;
}

bottomSlider.oninput = function () {
  values[3] = 50 + parseInt(this.value);
  values[2] = 50 - parseInt(this.value);
  text = `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`;
  clayBox.style.borderRadius = text;
  valueRadius.value = text;
}

rightSlider.oninput = function () {
  values[6] = 50 + parseInt(this.value);
  values[5] = 50 - parseInt(this.value);
  text = `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`;
  clayBox.style.borderRadius = text;
  valueRadius.value = text;
}

// 50% 50% 50% 50% / 50% 50% 50% 50%

function copyText() {

  /* Select the text field */
  valueRadius.select();
  valueRadius.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + valueRadius.value);
} 