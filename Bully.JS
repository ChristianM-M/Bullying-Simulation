function Response(){
  document.getElementById('Start').hidden = true;
  document.getElementById('Result1').hidden=false;
}

function Response2(){
  document.getElementById('Start').hidden = true;
  document.getElementById('Result2').hidden=false;
}

function Response3(){
  document.getElementById('Result3').hidden=false;
}

function ResponseA(){
  document.getElementById('Result1B').hidden=false;
}

function ResponseB(){
  document.getElementById('Result2B').hidden=false;
}

function ResponseC(){
  document.getElementById('Result3B').hidden=false;
}

function Response1A(){
  document.getElementById('Result1C').hidden=false;
}

function Response2A(){
  document.getElementById('Result2C').hidden=false;
  document.getElementById('Result1').hidden=true;
}

function Response() {
  document.getElementById('Result1').hidden = false;
  document.getElementById('Start').hidden = true;
  document.body.style.backgroundImage = "url('reporting.png')"
}

function Response2() {
  document.getElementById('Result2').hidden = false;
  document.getElementById('Start').hidden = true;
  document.body.style.backgroundImage = "url('Ignore.jpeg')"
}

function Response3() {
  document.getElementById('Result3').hidden = false;
  document.getElementById('Start').hidden = true;
  document.body.style.backgroundImage = "url('respondscen1.jpg')"
}

function ResponseA() {
  document.getElementById('Result1B').hidden = false;
  document.getElementById('Ask').hidden = true;
  document.getElementById('Result2').hidden = true;
  document.body.style.backgroundImage = "url('boy-61171_1280.jpg')"
}

function ResponseB() {
  document.getElementById('Result2').hidden = true;
  document.getElementById('Result2B').hidden = false;
  document.getElementById('Tell').hidden = true;
  document.body.style.backgroundImage = "url('tellingon.png')"
}

function ResponseC() {
  document.getElementById('Result3B').hidden = false;
  document.getElementById('Walk Away').hidden = true;
  document.getElementById('Result2').hidden = true;
  document.body.style.backgroundImage = "url('walkaway.png')"
}

function Response1A(){
  document.getElementById('Result1C').hidden = false;
  document.getElementById('Report2').hidden = true;
  document.getElementById('Result1').hidden = true;
  document.body.style.backgroundImage = "url('reporting.png')"
}

function Response2A(){
  document.getElementById('Result2C').hidden = false;
  document.getElementById('Fight').hidden = true;
  document.getElementById('Result1').hidden = true;
  document.body.style.backgroundImage = "url('fightcartoon.png')"
}
