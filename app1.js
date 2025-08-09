let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// para pruebas
console.log(numeroSecreto);
function asignarTextoElemto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);


    if (numeroUsuario === numeroSecreto) {
        // ? = if
        asignarTextoElemto("p","¡Has acertado!, el numero secreto era: " + numeroSecreto + " y lo has conseguido en " + intentos +" " +(intentos ===1  ? "ves" : "veces"));
       // desabilitar boton desabled para reiniciar el juego - boton en HTML
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        // el usuario no ha acertado
        if(numeroSecreto > numeroUsuario) {
            asignarTextoElemto("p", "El número secreto es mayor ");
        } else {
            asignarTextoElemto("p", "El número secreto es menor ");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    // selecciona el contenido de la caja codigo mas largo
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja.value = ""; 
}

function generarNumerosecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;  
    // si el numero generado ya esta en la lista de numeros sorteados

    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemto("p", "Ya has sorteado todos los números del 1 al " + numeroMaximo + ". Reinicia el juego para volver a jugar.");

    }else{
        // si el numero generado esta en la lista de numeros sorteados
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            // llamar a la funcion de nuevo
            return generarNumerosecreto();
        }   else {
            // si no esta en la lista, lo agregamos
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
         }
}

function condicionesIniciales(){
    // Asignar texto a los elementos HTML
    asignarTextoElemto("h1", " Juego del numero secreto");
    asignarTextoElemto("p", "Indica un numero del 1 al " + numeroMaximo);
    numeroSecreto = generarNumerosecreto();
    intentos = 1;

}
function reiniciarJuego() {
    
    // Limpiar la caja de texto
    limpiarCaja();
    // mensaje de intervalo de numeros
    //generar numero aleatorio
    // inicializar intentos
    condicionesIniciales();
    //desabilitar boton desabled para reiniciar el juego - boton en HTML
    document.getElementById("reiniciar").setAttribute("disabled", true);
    
}
condicionesIniciales();


