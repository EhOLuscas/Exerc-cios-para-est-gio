$(document).ready(function(){
    $("button").click(function(){ 
        let frase = $("input").val();
        let cont = 0;

        for (let i = 0; i < frase.length; i++) {
            if(frase[i] == 'a' || frase[i] == 'A'){
                cont++;
            }
        }

        alert("A letra 'A' aparece " + cont + " vezes.");
    });
});