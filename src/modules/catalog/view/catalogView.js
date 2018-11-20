/** The template for the catalog page*/
let template = function(familias, lang){
    let html=`
    <h3 class="text-center">${lang.NuestrosArticulos}</h3>
    <h1 class="text-center">${lang.CambiarCategoria}</h1>
     `;
     familias.forEach(element => {
        html += `
        <a href="#catalogo/${element.codfamilia}"><img src="${element.icono}" alt="${element.nombre}">${element.titulo}</a>
        `;
      });
      html+=`<br>
      <h1 class="text-center">${lang.FiltrarProductos}</h1>
      `;
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
  let filtrosTemplate = function(filtros, lang){
    let html=`
    <label for="marca">${lang.Marca}</label>
    <select id="marca">
        <option value="0">Todas</option>`;
        filtros.marca.forEach(element => {
            html += `
            <option value="${element.id}">${element.Marca}</option>
            `;
          });
        html+=`
    </select>
    <label for="pulgadas">${lang.Pulgadas}</label>
    <select id="pulgadas">
        <option value="0">Todas</option>`;
        filtros.pantalla.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_pantalla}</option>
            `;
          });
        html+=`
    </select>
    <label for="ram">${lang.Ram}</label>
    <select id="ram">
        <option value="0">Todas</option>`;
        filtros.ram.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_ram}</option>
            `;
          });
        html+=`
    </select>
    <label for="procesador">${lang.Procesador}</label>
    <select id="procesador">
        <option value="0">Todas</option>`;
        filtros.procesador.forEach(element => {
            html += `
            <option value="${element.id}">${element.num_procesador}</option>
            `;
          });
        html+=`
    </select>
    <label for="camara">${lang.Camara}</label>
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