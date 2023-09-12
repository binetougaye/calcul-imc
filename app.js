let height = prompt("Veuilez entre votre taille");
let weight = prompt("Veuillez entrer votre poids");
let number = print(height) + print(weight);
let imc = weight / (height * height);
let submit = document.querySelector("#submit");
console.log(submit);
submit.addEventListener("click", function () {
  alert("Votre IMC est de:" + imc);
  if (imc < 18.5) {
    alert("Insuffisance pondérale");
  }
  if (imc >= 18.5 && imc <= 24.9) {
    alert("Poids normal");
  }
  if (imc >= 25.0 && imc <= 29.9) {
    alert("Signe avant-coureur de surpoids");
  }
  if (imc >= 30.0 && imc <= 34.9) {
    alert("Obésité niveau 1");
  }
  if (imc >= 35.0 && imc <= 39.9) {
    alert("Obésité niveau 2");
  }
  if (imc > 40) {
    alert("Obésité niveau 3");
  }
});
