var alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alfa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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
    var msg_aux = "";
    console.log("msg: "+msg);
    console.log("chave: "+chave);
    console.log("tam da chave: "+tam_chave);

    for(var j = 0; j<msg.length; j++){
        msg_chave = msg.slice(0,tam_chave);
        msg=msg.slice(tam_chave,msg.length);
        console.log("msg-chave:"+msg_chave);
        console.log("Msg resto:"+msg);
        for(var i = 0; i<msg_chave.length;i++){
            var letra_msg = msg_chave[i];
            var letra_chave = chave[i];
            console.log("letra na msg:"+letra_msg);
            console.log("letra na chave: "+letra_chave);
            var letra_alf_msg = alf.lastIndexOf(letra_msg);
            var letra_alf_cha = alf.lastIndexOf(letra_chave);
            console.log("posicao da msg no alf:"+letra_alf_msg);
            console.log("posicao da chave no alf:"+letra_alf_cha);


            if ( (letra_alf_cha + letra_alf_msg) > 25)  {
                var resto = (parseInt(alf) + letra_alf_cha) - 25;
                msg_cifrada = msg_cifrada + alf[resto - 1];     
            } else{            
                msg_cifrada = msg_cifrada + alf[parseInt(letra_alf_msg) + letra_alf_cha];    
            }   
            

        }

    }
    
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
    let div = document.createElement("div");
    div.setAttribute("class", "div_msg");
    let p = document.createElement("p");
	let noTxt = document.createTextNode(msg_cifrada.toUpperCase());
    p.setAttribute("class", "text_msg");
	p.appendChild(noTxt);
    div.appendChild(p);
    let botao=document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("class","btn btn-danger");
    botao.setAttribute("value","Apagar");
    botao.onclick=remover;
    div.appendChild(botao);
    document.getElementById("resposta").appendChild(div);
}

let remover=function(){
    let pai=this.parentNode;
    pai.parentNode.removeChild(pai);
}