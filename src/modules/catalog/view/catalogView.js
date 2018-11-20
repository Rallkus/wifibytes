/** The template for the catallog page*/
let template = function(familias){
    let html=`
    <h3 class="text-center">Nuestros artículos</h3>
    <h1 class="text-center">Cambiar categoría</h1>
     `;
     familias.forEach(element => {
        html += `
        <a href="#catalogo/${element.codfamilia}"><img src="${element.icono}" alt="${element.nombre}">${element.titulo}</a>
        `;
      });
      html+=`<br>`;
    return html;
  }
  let catalogTemplate = function(familias){
    let html=`
    <div id="categorias"></div>
    <div id="filtros"></div>
    <div id="productos"></div>
     `;
    return html;
  }
  let filtrosTemplate = function(filtros){
    let html=`
    <label for="marca">Marca</label>
    <select id="marca">
        <option value="0">Todas</option>`;
        filtros.marca.forEach(element => {
            html += `
            <option value="${element.id}">${element.Marca}</option>
            `;
          });
        html+=`
    </select>
    <label for="pulgadas">Pulgadas</label>
    <select id="pulgadas">
        <option value="0">Todas</option>`;
        filtros.pantalla.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_pantalla}</option>
            `;
          });
        html+=`
    </select>
    <label for="ram">Ram</label>
    <select id="ram">
        <option value="0">Todas</option>`;
        filtros.ram.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_ram}</option>
            `;
          });
        html+=`
    </select>
    <label for="procesador">Procesador</label>
    <select id="procesador">
        <option value="0">Todas</option>`;
        filtros.procesador.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_procesador}</option>
            `;
          });
        html+=`
    </select>
    <label for="camara">Camara</label>
    <select id="camara">
        <option value="0">Todas</option>`;
        filtros.camara.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_camara}</option>
            `;
          });
        html+=`
    </select>
     `;
    return html;
  }
  /**This is the template for any "tarifa" we create, in case there is any "subtarifa" it shows
 * the most relevant details
 * @param datos_tarifa is the data sent by homeCtrl in order to paint the tarifa
*/
let catalogo = function(producto){
  let html=`
    <div class="flex-catalogo">
      <p><img src="${producto.imagen}" style="width:250px;height:300px;"></p>
      <p>${producto.descripcion}</p>
      <p>${producto.descripcion_breve}</p>
      <p>${producto.pvp}</p>    
    </div>
    `;  
    return html;
  }
  let containerCatalogo= function(productos){
    return `
    <div class="flex-container-catalogo"> 
      ${productos} 
    </div>        `;
  }
  
   export {template, catalogTemplate, filtrosTemplate, catalogo, containerCatalogo};