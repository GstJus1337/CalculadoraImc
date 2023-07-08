function calcularImc() {
    var idade = document.getElementById("idade").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
  
    altura = altura / 100;
  
    var imc = peso / (altura * altura);
  
    imc = imc.toFixed(2);

    alert = ("Seu IMC é: " + imc);
}
  
