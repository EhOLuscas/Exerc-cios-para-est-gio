$(document).ready(function(){
    let seq = new Array(); 
    let aux = 0;

    $("button").click(function(){
        let num = $("#inserir").val();           

        for (let i = 0; i < 30; i++) {
            if(i == 0){
                seq[i] = 0;
            }else if(i == 1){
                seq[i] = 1;
            }else{
                seq[i] = seq[i - 1] + seq[i - 2];  
            }

            if(num == seq[i]){
                aux = 1;
            }

            console.log(seq[i]);
        }

        if(aux == 1){
            alert("O número pertence a sequência de Fibonacci!");
        }else{
            alert("O número não pertence a sequência de Fibonacci!");
        }
    });
    
});