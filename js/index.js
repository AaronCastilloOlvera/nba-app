
import { Equipos } from "./equipos.js";

var host = "v1.basketball.api-sports.io";
var key = "510d14a176b8062557cfa86f735abf14";

const btnApi = document.getElementById("btnTest");
const btnApi2 = document.getElementById("btnTest2");
const contenedor = document.getElementById("contenedor")

// nba_id = 12
ListarEquipos();

    function ListarEquipos(){
    
        const arregloEquipos = [];

        Equipos.forEach(equipo => {
            
            // Imagen
            const imagen = document.createElement('img');
            imagen.src = equipo.logo;
            imagen.setAttribute('id', equipo.id);
            imagen.className = "img-fluid mx-auto d-block";
            imagen.style = "width: 70px;"

            // 
            const titulo = document.createElement('p');
            titulo.textContent = equipo.name;
            titulo.className = "text-center";

            //
            const lista = document.createElement('div');
            lista.setAttribute('id', equipo.id);
            lista.className = "divTeam m-3 rounded";

            lista.append(imagen, titulo);
            arregloEquipos.push(lista);
        });

        contenedor.append(...arregloEquipos);

    }

btnApi.addEventListener('click', () => {
    
      const options = {
        method: 'GET', 
        url: "https://v1.basketball.api-sports.io/teams?league=12&season=2021-2022",
        headers: 
        {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': host
        }
      };
      
      axios.request(options).then(  (response) => {
          console.log(response.data);
      })
});

btnApi2.addEventListener('click', () => {
    console.log(Equipos)

})

