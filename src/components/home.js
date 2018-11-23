import Component from "./component";
import {loadJavascriptForHomeView} from '../modules/home/view/home';

class Home extends Component{

    constructor(datosEmpresaJSON,selectRule) { 
        super(datosEmpresaJSON,selectRule);
        console.log(datosEmpresaJSON);
        let json = JSON.parse(datosEmpresaJSON[0]);   
        let datos_empresa= JSON.parse(datosEmpresaJSON[1]);
        let texts= JSON.parse(datosEmpresaJSON[2]);
        
        /** We filter our array in order to get the ones we want to show up in our home */
        let filteredArray = json.results;
        let filteredData=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_slider/));
        console.log(json);
        console.log(filteredData);
        console.log(texts);
        this.selectedTarget.innerHTML=this.render(filteredArray, filteredData, texts[0]);
        loadJavascriptForHomeView();
             
    }
  
    /** render: Array with two JSONs first element datosEmpresa endpoint and second home endpoint  */
    render(filteredArray, datos_empresa, texts) {
        let html=`
  <section id="tarifas" class="tarifas">`;
  html += `
        <div class="section__flex-container-tarifas">`;
        filteredArray.forEach(datos_tarifa => {
        html+=`
    <div class="flex-container-tarifas_flex-tarifas">
      <p><img src="${datos_tarifa.logo}">${datos_tarifa.nombretarifa}</p>
      <p>${datos_tarifa.pretitulo}</p>
      `;
  if(datos_tarifa.subtarifas.length > 0){
    let subtarifa = datos_tarifa.subtarifas[0];
    if(subtarifa.tipo_tarifa === 1){
      html +=`
        <p>Tarifa móvil</p>
        <p>${subtarifa.subtarifa_cent_minuto} cent/min</p>
        <p>${subtarifa.subtarifa_datos_internet} datos internet</p>
        <p>${subtarifa.subtarifa_minutos_gratis} minutos gratis</p>
      `;
    }else if(subtarifa.tipo_tarifa === 2){
      html +=`
        <p>Tarifa de fijo</p>
      `;
    }else if(subtarifa.tipo_tarifa === 3){
      html +=`
        <p>Tarifa de fibra óptica</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_bajada} megas de fibra óptica de bajada</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_subida} megas de fibra óptica de subida</p>
      `;
    }
    else if(subtarifa.tipo_tarifa === 4){
      html +=`
        <p>Tarifa de wifi</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_bajada} megas de bajada con wifi</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_subida} megas de subido con wifi</p>
      `;
    }else{
      html +=`
        <p>Tarifa de televisión</p>
        <p>${subtarifa.subtarifa_num_canales} canales disponibles</p>
      `;
    }
    html +=`
    </div>
     `;
  }else{
    html +=`
    </div>
     `;
  }
  console.log(datos_tarifa.subtarifas.length);  
});  
  html+=`</div></section>`;
  html+=`<div id="slider">`;
  html+=`<!-- Slideshow container -->
    <div class="slideshow-container">
  `;
  /** We want to count in which element we are due to our need to print in what slider we are */
  let i=1;
  /** length is just a variable that makes easier to use datos_empresa.lenght value inside
   * datos_empresa.forEach
   */
  let lenght = datos_empresa.lenght;
  /** We create an slide for each element inside datos_empresa */
  datos_empresa.forEach(element => {
    html += `
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">${i} / ${lenght}</div>
        <img src="${element.image}" style="width:100%">
        <div class="text">${element.content}</div>
      </div>
    `;
    /** As I said, we want to count each time we loop so the incremental */
    i++;
  });
  /** Added the next html */
  html += `
    <!-- Next and previous buttons -->
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
    </div>
    <br>
    <!-- The dots/circles -->
    <div style="text-align:center">
  `;
  /** Same objectives as before, restoring our variable value to 1  */
  i=1;
  /** Printing the dots, we want to put them an id so we can pass that id to 
   * our carousel functions */
  datos_empresa.forEach(element => {
    html += `
    <span class="dot" id="${i}"></span> 
    `;
    i++;
  });
  html += `</div>`;
  html+=`</div>`;
  html+=`<div class="page__flex-containerBoxes" id="homeText">`;
  html+=`
    <div>
      <div id="titleLeftBox"><h1>${texts.caja_izquierda_titulo}</h1></div>
        <div id="titleLeftText"><p>${texts.caja_izquierda_texto}</p></div>
    </div>
    <div>
      <div id="titleRightBox"><h1>${texts.caja_derecha_titulo}</h1></div>
      <div id="titleRightText"><p>${texts.caja_derecha_texto}</p></div>
    </div>
   `
  html+=`</div>`;
  
        
    return html;
    }
}

export default Home;