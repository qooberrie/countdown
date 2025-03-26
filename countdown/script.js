// ---------------------- COUNTDOWN JUNE

// DATA FINAL
var countDownDateJune = new Date("June 24, 2025 10:35:00").getTime();
// DIFERENCA ENTRE HOJE E DATA FINAL
var x = setInterval(function () {
  // PEGANDO DATA DE HOJE
  var nowJune = new Date().getTime();
  // CALCULANDO DIFERENCA
  var distance = countDownDateJune - nowJune;

  // MATEMATICA MATEMATICA E MAIS MATEMATICA
  var daysJune = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursJune = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesJune = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsJune = Math.floor((distance % (1000 * 60)) / 1000);

  // ID RECEBENDO VALOR DAS VARIAVEIS
  document.getElementById("daysJune").innerHTML = daysJune;
  document.getElementById("hoursJune").innerHTML = hoursJune;
  document.getElementById("minutesJune").innerHTML = minutesJune;
  document.getElementById("secondsJune").innerHTML = secondsJune;
  // E ESSE 1000 QE TEM A VER COM MATEMATICA
}, 1000);

// ---------------------- COUNTDOWN JULY
// DATA FINAL
var countDownDateJuly = new Date("July 29, 2025 11:05:00").getTime();
// DIFERENCA ENTRE HOJE E DATA FINAL
var y = setInterval(function () {
  // PEGANDO DATA DE HOJE
  var nowJuly = new Date().getTime();
  // CALCULANDO DIFERENCA
  var distance = countDownDateJuly - nowJuly;

  // MATEMATICA MATEMATICA E MAIS MATEMATICA
  var daysJuly = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursJuly = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesJuly = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsJuly = Math.floor((distance % (1000 * 60)) / 1000);

  // ID RECEBENDO VALOR DAS VARIAVEIS
  document.getElementById("daysJuly").innerHTML = daysJuly;
  document.getElementById("hoursJuly").innerHTML = hoursJuly;
  document.getElementById("minutesJuly").innerHTML = minutesJuly;
  document.getElementById("secondsJuly").innerHTML = secondsJuly;
  // E ESSE 1000 QE TEM A VER COM MATEMATICA
}, 1000);

// ---------------------- TEST
function showBody() {
  if (document.getElementById("clock-counter-june").style.display == "block") {
    document.getElementById("clock-counter-june").style.display = "none";
  } else {
    document.getElementById("clock-counter-june").style.display = "block";
  }
}
