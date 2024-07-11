const cargarCartas = async() => {
try{
    const respuesta = await fetch("https://tarot-api-es.vercel.app/api/v1/cards");


const datos = await respuesta.json();
const datosCartas = datos.cards;
console.log(datos);
let num = Math.floor(Math.random() * 79)

document.getElementById('contenedor').innerHTML = 
`

<div id="contenedorCarta">

    <div class="carta">
        <div class="front">
            <img class="cartaImagen" src='${datosCartas[num].image}'></img>
        </div>
        <div class="back">
            <p> ${datosCartas[num].name} <br> ${datosCartas[num].meaning_up} <br> <br> ${datosCartas[num].meaning_rev}</p>
            <div class="boton">
            <button class="btn" onclick="cargarCartas()">Tirar Carta</button>
        </div>
            </div>
    
    </div>        
    
            
</div>



`;


}

catch(error){
    console.log(error);
}
}

