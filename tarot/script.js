const cargarCartas = async() => {
try{
    const respuesta = await fetch("https://tarot-api-es.vercel.app/api/v1/cards");


const datos = await respuesta.json();
const datosCartas = datos.cards;
console.log(datos);
let num = Math.floor(Math.random() * 79)

document.getElementById('contenedorCarta').innerHTML = 
`
<div class="carta">
<div class="front">
<img class="cartaImagen" src='${datosCartas[num].image}'></img>
</div>
<div class="back">
<p> ${datosCartas[num].name} <br> ${datosCartas[num].meaning_up} <br> <br> ${datosCartas[num].meaning_rev}</p>
</div>

</div>

`;


}

catch(error){
    console.log(error);
}
}

