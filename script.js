const textMensaje = document.querySelector("#mensaje");
const btnEncriptar = document.querySelector("#Encriptar");
const btnDesencriptar = document.querySelector("#Desencriptar");
const nota = "#Toca el texto para Copiar# \n";

function encriptar() {
  var msg = textMensaje.value
    .replace(nota, "")
    .replaceAll(" ", "")
    .replaceAll("\n", "");
  if (msg.substring(0).match("[^a-z]")) {
    alert("Un caracter no esta permitido");
    textMensaje.focus();
    return;
  }

  msg = textMensaje.value
    .replace(nota, "")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
  textMensaje.value = nota + msg;
  textMensaje.focus();
  return;
}

function desencriptar() {
  textMensaje.value = textMensaje.value.replace(nota, "");
  var msg = textMensaje.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  textMensaje.value = nota + msg;
  textMensaje.focus();
  return;
}

function copiar() {
  textMensaje.value = textMensaje.value.replace(nota, "");
  if (textMensaje.value != "") {
    var msg = textMensaje.value;
    navigator.clipboard.writeText(msg);
    // textMensaje.value = "";
  }
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
textMensaje.onclick = copiar;
