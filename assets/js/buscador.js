
  let propiedades = [
    {name: "Casa de campo", description: "Un lugar ideal para descansar de la ciudad", src:"https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2, m: 170},
    
    {name: "Casa de playa", description: "Despierta tus días oyendo el oceano", src:"https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
     rooms: 2, m: 130},
    
     {name: "Casa en el centro", description: "Ten cerca de ti todo lo que necesitas", src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
     rooms: 1, m: 80},
    
     {name: "Casa rodante", description: "Conviertete en un nómada del mundo sin salir de tu casa", src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
     rooms: 1, m: 6},
    
     {name: "Departamento", description: "Desde las alturas todo se ve mejor", src:"https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
     rooms: 3, m: 200},
    
     {name: "Mansión", description: "Vive una vida lujosa en la mansión de tus sueños ",src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
     rooms: 5, m: 500}
  ];

  let cardDpto = document.querySelector('#propiedades');
  let html = "";
  let propiedadSelect;
  

  //--- Funcion para cargar las cards
  function cardFunction(propiedad){
    html += `
        <div class="propiedad">
            <div class="img" style="background-image: url('${propiedad.src}')"></div>
            <section>
                <h5>${propiedad.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedad.rooms}</p>
                    <p>Metros: ${propiedad.m}</p>
                </div>
                <p class="my-3">${propiedad.description}</p>
                <button class="btn btn-info " id="button">Ver más</button>
            </section>
        </div>
    `;

    cardDpto.innerHTML = html
  };

  //--- Cargar documentos
  window.onload = function cargar(){
    for (let propiedad of propiedades){
            cardFunction(propiedad);
            cardDpto.innerHTML = html;
        }
    html = "";
    }

    
    //--- Boton Buscar
    let buscarButton = document.querySelector('#buscar');

    buscarButton.addEventListener('click', function buscar() {

        html = '';
        let total = "";

        let inputHabitaciones = Number(document.querySelector('#habitaciones').value) ;
        let desdeMetros2 = Number(document.querySelector('#desdeMetros2').value) ;
        let hastaMetros2 = Number(document.querySelector('#hastaMetros2').value) ;
       

        if (inputHabitaciones == "" || desdeMetros2 == "" || hastaMetros2 == "") {
            alert("por favor, rellenar todos los campos")
            return
        }  else if 
            ( total == 0 || total == null || total == "") {
                alert("No se encontraron resultados")
                return
            } else {
                propiedadSelect = propiedades.filter(propiedad => {         
                return  propiedad.rooms >= inputHabitaciones && (propiedad.m >= desdeMetros2 && propiedad.m <= hastaMetros2 )
                
            })
            console.log(propiedadSelect)
            for(let propiedad of propiedadSelect){
                cardFunction(propiedad)
                }
            total = propiedadSelect.length
            document.querySelector('#total').innerHTML = "total: " + total;
        }
    });


    //--- Boton reinicio de busqueda 

    document.getElementById("resetButton").addEventListener("click", function () {
        for (let propiedad of propiedades) {
          cardFunction(propiedad);
          cardDpto.innerHTML = html;
          cargar();
          document.getElementById("total").innerHTML = "Total: " + propiedades.length;
          document.getElementById("inputHAbitaciones").value = "";
          document.getElementById("desdeMetros2").value = "";
          document.getElementById("hastaMetros2").value = "";
          
        }
        /*Se reinicia el template*/
        html=""
        
      });