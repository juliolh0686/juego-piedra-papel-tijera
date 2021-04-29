var numero_jugado=0;

function reiniciar_juego(){
    numero_jugado=0;
    document.getElementById('var-persona').innerHTML=0;
    document.getElementById('var-maquina').innerHTML=0;
    document.getElementById('conteo').innerHTML =0;
    document.getElementById('mensaje').innerHTML = "Elegir tu opción";
}

//inicializo la Funcion Juego
function juego(elegida){

if(numero_jugado<10){

//Inicializo el array con las opciones
var listado = ["Piedra", "Papel", "Tijera"];

//de manera aleatoria se selecciona una opcion que corresponde a la PC
aleatorio = Math.floor(Math.random()*(listado.length));

//Asigno la opción aleatoria elegida en la variable maquina
maquina=listado[aleatorio];

//Muestro en pantalla la opcion elegida aleatoriamente por la PC
document.getElementById('opcionmaquina').innerHTML = maquina;

//variable para mostrar el mensaje
var mensaje ="";
var puntoganador=0;

//Estructura condicional switch para validar el juego y mostrar el resultado
    switch (true) {
        case (elegida=="Piedra" && maquina=="Tijera"):
            mensaje="Ganaste";
            puntoganador=1;
            break;
        case (elegida=="Papel" && maquina=="Piedra"):
            mensaje="Ganaste";
            puntoganador=1;
            break;
        case (elegida=="Tijera" && maquina=="Papel"):
            mensaje="Ganaste";
            puntoganador=1;
            break;
        case (elegida==maquina):
            mensaje="Empate";
            puntoganador=2;
            break;
        default:
            mensaje="Gano la Maquina";
            puntoganador=0;
    }

    document.getElementById('mensaje').innerHTML = mensaje;

    if (puntoganador==1){
        document.getElementById('var-persona').innerHTML = Number(document.getElementById('var-persona').innerHTML)+1;
    }else if (puntoganador==0){
        document.getElementById('var-maquina').innerHTML = Number(document.getElementById('var-maquina').innerHTML)+1;
    }

    numero_jugado++;

    document.getElementById('conteo').innerHTML =numero_jugado;

    if(numero_jugado==10){
        if(Number(document.getElementById('var-persona').innerHTML) > Number(document.getElementById('var-maquina').innerHTML)){
            document.getElementById('mensaje').innerHTML = "Ganaste la Partida - Felicitaciones";
        }else if(Number(document.getElementById('var-persona').innerHTML) < Number(document.getElementById('var-maquina').innerHTML)){
            document.getElementById('mensaje').innerHTML = "Gano la Maquina -Intentar de Nuevo";
        } else {
            document.getElementById('mensaje').innerHTML ="Empate - intentar de Nuevo";
        }
    }

}else(
    document.getElementById('mensaje').innerHTML = "Termino el Juego - Reiniciar"
)

}





