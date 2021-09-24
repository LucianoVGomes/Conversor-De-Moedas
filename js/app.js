function calcularMedia(){
    var nome = document.getElementById("nome").value;
    var nota1 = document.getElementById("nota1").value;
    nota1 = parseInt(nota1)
    var nota2 = document.getElementById("nota2").value;
    nota2 = parseInt(nota2)
    var nota3 = document.getElementById("nota3").value;
    nota3 = parseInt(nota3)
    var nota4 = document.getElementById("nota4").value;
    nota4 = parseInt(nota4)
    var media = (nota1 + nota2 + nota3 + nota4)/4
  
    if (media >= 7) {
       var element = document.getElementById("media");
       element.innerHTML = "<b>Parabéns cabeção "+ nome +",você foi aprovado!!!</b>";
    }
    else {
      var element = document.getElementById("media");
      element.innerHTML = "<b>"+ nome +", Infelizmente sua média   não foi suficiente para a aprovação, estude mais!</b>";
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*var nome = "Vinicius";
  
  function calcularMedia() {
    
    var nota1 = document.getElementById("nota1").value;
    nota1 = parseInt(nota1);
    var nota2 = document.getElementById("nota2").value;
    nota2 = parseInt(nota2);
    var nota3 = document.getElementById("nota3").value;
    nota3 = parseInt(nota3);  
    var nota4 = document.getElementById("nota4").value;
    nota4 = parseInt(nota4);
    
   if (media >= 7) {
      var element = document.getElementById("media");
     // element.innerHTML = "<b>Parabéns cabeção, "nome" você foi aprovado!!!</b>"
    } else {
      var element = document.getElementById("media");
      element.innerHTML = "<b>Infelizmente sua média não foi suficiente para a aprovação, estude mais!</b>"
    };
  /*var nota1 = 10;
   // nota1 = parseInt(nota1);
  console.log(nota1);*/