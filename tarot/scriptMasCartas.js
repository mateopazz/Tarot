const cartasAmor = async() => {
    try{
        const respuesta = await fetch("https://tarot-api-es.vercel.app/api/v1/cards");
    
    
    const datos = await respuesta.json();
    const datosCartas = datos.cards;
    let num = Math.floor(Math.random() * 79)
    
    document.getElementById('contenedorCarta').innerHTML = 
    `
    <div class="carta">
    <div class="front">
    <img class="cartaImagen" src='${datosCartas[num].image}'></img>
    </div>
    
    </div>
    <div class="back">
    <p> <span class="nombre">${datosCartas[num].name}</span> <br> ${datosCartas[num].amor}</p>
    </div>
    `;
    
    }
    catch(error){
        console.log(error);
    }
    }
    const cartasTrabajo = async() => {
        try{
            const respuesta = await fetch("https://tarot-api-es.vercel.app/api/v1/cards");
        
        
        const datos = await respuesta.json();
        const datosCartas = datos.cards;
        let num = Math.floor(Math.random() * 79)
        
        document.getElementById('contenedorCarta').innerHTML = 
        `
        <div class="carta">
        <div class="front">
        <img class="cartaImagen" src='${datosCartas[num].image}'></img>
        </div>
        
        </div>
        <div class="back">
        <p> <span class="nombre">${datosCartas[num].name}</span> <br> ${datosCartas[num].trabajo}</p>
        </div>
        `;
        
        }
        catch(error){
            console.log(error);
        }
        }
        const cartasSalud = async() => {
            try{
                const respuesta = await fetch("https://tarot-api-es.vercel.app/api/v1/cards");
            
            
            const datos = await respuesta.json();
            const datosCartas = datos.cards;
            let num = Math.floor(Math.random() * 79)
            
            document.getElementById('contenedorCarta').innerHTML = 
            `
            <div class="carta">
            <div class="front">
            <img class="cartaImagen" src='${datosCartas[num].image}'></img>
            </div>
            
            </div>
            <div class="back">
            <p> <span class="nombre">${datosCartas[num].name}</span> <br> ${datosCartas[num].salud}</p>
            </div>
            `;
            
            }
            catch(error){
                console.log(error);
            }
            }
            const cartasFinanzas = async() => {
                try{
                    const respuesta = await fetch("https://tarot-api-es.vercel.app/api/v1/cards");
                
                
                const datos = await respuesta.json();
                const datosCartas = datos.cards;
                let num = Math.floor(Math.random() * 79)
                
                document.getElementById('contenedorCarta').innerHTML = 
                `
                <div class="carta">
                <div class="front">
                <img class="cartaImagen" src='${datosCartas[num].image}'></img>
                </div>
                
                </div>
                <div class="back">
                <p> <span class="nombre">${datosCartas[num].name}</span> <br> ${datosCartas[num].finanzas}</p>
                </div>
                `;
                
                }
                catch(error){
                    console.log(error);
                }
                }
        
   
        
        
