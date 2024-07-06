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
<img class="cartaImagen" src='${datosCartas[num].image}'></img>
<p class="cartaTexto"> ${datosCartas[num].name} <br> ${datosCartas[num].meaning_up} </p>
</div>
`;


}

catch(error){
    console.log(error);
}
}

