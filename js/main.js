var jugador = 1;
var r1=0;
var r2=0;
function clickBtn(btn){
  if (jugador == 1) {
  document.getElementById(btn).value="X";
  //document.getElementById(btn).disabled="disabled";
  jugador-= 1;
ganador();

}else {
  document.getElementById(btn).value="O";
  //document.getElementById(btn).disabled="disabled";
  jugador += 1;
ganador();

}
}
function ganador(){

if (
document.getElementById("btn1").value =="X" &&
document.getElementById("btn2").value =="X" &&
document.getElementById("btn3").value =="X" ||
document.getElementById("btn4").value =="X" &&
document.getElementById("btn5").value =="X" &&
document.getElementById("btn6").value =="X" ||
document.getElementById("btn7").value =="X" &&
document.getElementById("btn8").value =="X" &&
document.getElementById("btn9").value =="X" ||
document.getElementById("btn1").value =="X" &&
document.getElementById("btn4").value =="X" &&
document.getElementById("btn7").value =="X" ||
document.getElementById("btn2").value =="X" &&
document.getElementById("btn5").value =="X" &&
document.getElementById("btn8").value =="X" ||
document.getElementById("btn3").value =="X" &&
document.getElementById("btn6").value =="X" &&
document.getElementById("btn9").value =="X" ||
document.getElementById("btn1").value =="X" &&
document.getElementById("btn5").value =="X" &&
document.getElementById("btn9").value =="X" ||
document.getElementById("btn3").value =="X" &&
document.getElementById("btn5").value =="X" &&
document.getElementById("btn7").value =="X"
) {
  alert("El ganador es X!!")
r1 +=1;
console.log(result1);
limpiar();
document.getElementById("result1").value=r1;
} else if (
document.getElementById("btn1").value =="O" &&
document.getElementById("btn2").value =="O" &&
document.getElementById("btn3").value =="O" ||
document.getElementById("btn4").value =="O" &&
document.getElementById("btn5").value =="O" &&
document.getElementById("btn6").value =="O" ||
document.getElementById("btn7").value =="O" &&
document.getElementById("btn8").value =="O" &&
document.getElementById("btn9").value =="O" ||
document.getElementById("btn1").value =="O" &&
document.getElementById("btn4").value =="O" &&
document.getElementById("btn7").value =="O" ||
document.getElementById("btn2").value =="O" &&
document.getElementById("btn5").value =="O" &&
document.getElementById("btn8").value =="O" ||
document.getElementById("btn3").value =="O" &&
document.getElementById("btn6").value =="O" &&
document.getElementById("btn9").value =="O" ||
document.getElementById("btn1").value =="O" &&
document.getElementById("btn5").value =="O" &&
document.getElementById("btn9").value =="O" ||
document.getElementById("btn3").value =="O" &&
document.getElementById("btn5").value =="O" &&
document.getElementById("btn7").value =="O") {

  alert("El ganador es O!!")
  r2 +=1;
  limpiar();
  document.getElementById("result2").value=r2;
  }
else {

}
}

function limpiar()
{
   document.getElementById("btn1").value="";
   document.getElementById("btn2").value="";
   document.getElementById("btn3").value="";
   document.getElementById("btn4").value="";
   document.getElementById("btn5").value="";
   document.getElementById("btn6").value="";
   document.getElementById("btn7").value="";
   document.getElementById("btn8").value="";
   document.getElementById("btn9").value="";
}
