var alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const espaco = ' ';

document.getElementById("btn_cifrar").addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        cifrarMsg();             
    }
);

function cifrarMsg(){
    var msg = document.getElementById("msg").value.toUpperCase();
    var chave = document.getElementById("chave").value.toUpperCase();
    var tam_chave = chave.length;
    var msg_chave = "";
    var msg_cifrada = "";
    
    console.log("msg: "+msg+" |chave: "+chave+" |tam da chave: "+tam_chave);

    for(var j = 0; j<msg.length; j++){ 
        
        msg_chave = msg.slice(0,tam_chave);
        msg=msg.slice(tam_chave,msg.length);
        console.log("msg-chave: "+msg_chave+" |Msg resto: "+msg);
        
        for(var i = 0; i<msg_chave.length;i++){
            var letra_msg = msg_chave[i];
            var letra_chave = chave[i];
             console.log("letra na msg: "+letra_msg+" |letra na chave: "+letra_chave);
    
            var letra_alf_msg = alf.lastIndexOf(letra_msg);
            var letra_alf_cha = alf.lastIndexOf(letra_chave);
            console.log("letra da msg no alf: "+letra_alf_msg+" |letra da chave no alf: "+letra_alf_cha);
    
            var soma = letra_alf_cha+letra_alf_msg;
            console.log("Soma: "+soma);
       
    
            if ( soma > 25)  {
                var resto = soma - 25;
                msg_cifrada = msg_cifrada + alf[resto - 1];     
            } else{            
                msg_cifrada = msg_cifrada + alf[soma];    
            }   
            
        } //for i

          /*  if(msg.length<tam_chave){ 
                var letra_msg = msg[j];
                var letra_chave = chave[j];
                console.log("MSG < CHAVE| letra na msg: "+letra_msg+" |letra na chave: "+letra_chave);

                var letra_alf_msg = alf.lastIndexOf(letra_msg);
                var letra_alf_cha = alf.lastIndexOf(letra_chave);
                console.log("MSG < CHAVE| letra da msg no alf: "+letra_alf_msg+" |letra da chave no alf: "+letra_alf_cha);

                var soma = letra_alf_cha+letra_alf_msg;
                console.log("MSG < CHAVE|  SOMA: "+soma);
    
                if ( soma > 25)  {
                    var resto = soma - 25;
                    console.log("MSG < CHAVE| RESTO: "+resto);
                    msg_cifrada = msg_cifrada + alf[resto - 1];     
                } else{            
                    msg_cifrada = msg_cifrada + alf[soma];    
                }
            } //if msg < chave  */
       
    } //for j
    
    resposta(msg_cifrada)
}


document.getElementById("btn_descifrar").addEventListener("click",
(evento)=>{
    evento.preventDefault();

    descifrarMsg();

});

function descifrarMsg(){
    var msg = document.getElementById("msg").value.toLowerCase();
    var chave = document.getElementById("chave").value.length;
    var msg_cifrada = '';
    for (var i = 0; i < msg.length; i++ ){ 
        if (msg[i] == espaco){
            msg_cifrada = msg_cifrada + espaco; 
        }else{
            var letra_msg = msg[i];
            var letra_alf = letras_alf.lastIndexOf(letra_msg); 
            if ( (letra_alf - chave) < 0)  {
                var resto = (parseInt(letra_alf) - chave) + 24;
                msg_cifrada = msg_cifrada +  letras_alf[2 + resto];    
            }else{
                msg_cifrada = msg_cifrada +  letras_alf[parseInt(letra_alf) - chave];    
            }
        }   
    } 
    resposta(msg_cifrada);
}

function resposta(msg_cifrada){
    document.getElementById("resposta").value = msg_cifrada;
}
