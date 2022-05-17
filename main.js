var alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
    if(tam_chave<2){
        alert("digita uma chave com pelo menos 2 caracteres");
    }else{       
        for(var j = 0; j<=msg.length+tam_chave; j++){ 
            msg_chave = msg.slice(0,tam_chave);
            msg=msg.slice(tam_chave);
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
            }      
        }
        resposta(msg_cifrada)
    }       
}
document.getElementById("btn_descifrar").addEventListener("click",
(evento)=>{
    evento.preventDefault();
    descifrarMsg();
});
function descifrarMsg(){
    var msg = document.getElementById("msg").value.toUpperCase();
    var chave = document.getElementById("chave").value.toUpperCase();
    var tam_chave = chave.length;
    var msg_chave = "";
    var msg_cifrada = "";   
    console.log("msg: "+msg+" |chave: "+chave+" |tam da chave: "+tam_chave);
    if(tam_chave<2){
        alert("digita uma chave com pelo menos 2 caracteres");
    }else{     
        for(var j = 0; j<=msg.length+tam_chave; j++){         
            msg_chave = msg.slice(0,tam_chave);
            msg=msg.slice(tam_chave);
            console.log("msg-chave: "+msg_chave+" |Msg resto: "+msg);           
            for(var i = 0; i<msg_chave.length;i++){
                var letra_msg = msg_chave[i];
                var letra_chave = chave[i];
                console.log("letra na msg: "+letra_msg+" |letra na chave: "+letra_chave);
                var letra_alf_msg = alf.lastIndexOf(letra_msg);
                var letra_alf_cha = alf.lastIndexOf(letra_chave);
                console.log("letra da msg no alf: "+letra_alf_msg+" |letra da chave no alf: "+letra_alf_cha);
                var sub = letra_alf_msg-letra_alf_cha;
                console.log("Sub: "+sub);    
                if ( sub < 0)  {
                    var resto = sub + 24;
                    msg_cifrada = msg_cifrada + alf[2 + resto];     
                } else{            
                    msg_cifrada = msg_cifrada + alf[sub];    
                }          
            }        
        }
        resposta(msg_cifrada);
      }
}
function resposta(msg_cifrada){
    document.getElementById("resposta").value = msg_cifrada;
}