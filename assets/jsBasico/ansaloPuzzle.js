let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");


//metodo

const fa1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (numeros.innerHTML == "" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML = "1";
    }
  }
};
const fb2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "2";
    } else {
      alert("paso incorrecto");
    }
  }
};
const fc3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "3";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};
const fd4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (numeros.innerHTML == "123" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "4";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};
const fe5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (numeros.innerHTML == "1234" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "5";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};
const ff6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (numeros.innerHTML == "12345" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "6";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};
const fg7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (numeros.innerHTML == "123456" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "7";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};
const fh8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (numeros.innerHTML == "1234567" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "8";
    } else {
    alert("Paso invalido, intenta de nuevo");
  }
}
};
const fi9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (numeros.innerHTML == "12345678" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "9";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};
const fj0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (numeros.innerHTML == "123456789" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "0";
    } else {
      alert("Paso invalido, intenta de nuevo");
    }
  }
};

btnA1.onclick = () => {
  fa1();
};
btnB2.onclick = () => {
  fb2();
};
btnC3.onclick = () => {
  fc3();
};
btnD4.onclick = () => {
  fd4();
};
btnE5.onclick = () => {
  fe5();
};
btnF6.onclick = () => {
  ff6();
};
btnG7.onclick = () => {
  fg7();
};
btnH8.onclick = () => {
  fh8();
};
btnI9.onclick = () => {
  fi9();
};
btnJ0.onclick = () => {
  fj0();
};
