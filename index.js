let local = document.getElementById("local");
let visita = document.getElementById("visita");

let num = 0;
let num2  = 0
function sum1() {
  local.textContent = num += 1;
}

function sum2() {
  local.textContent = num += 2;
}

function sum3() {
  local.textContent = num += 3;
}

function sum11() {
  visita.textContent = num2 += 1;
}

function sum22() {
  visita.textContent = num2 += 2;
}

function sum33() {
  visita.textContent = num2 += 3;
}


function reset (){
    local.textContent = 0
    visita.textContent = 0
    num=0
    num2=0
}