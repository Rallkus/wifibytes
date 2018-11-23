import Component from "./component";
import {loadJavascriptForCatalogView} from '../modules/catalog/view/catalog';

class Catalog extends Component{

    constructor(datosEmpresaJSON,selectRule) {      
        super(datosEmpresaJSON,selectRule);
        let products = [];
        let productos = JSON.parse(datosEmpresaJSON[2]);
        let filteredArray = productos.results;
        filteredArray.forEach(element => {
            /** each @param element is a product */
            products.push(element);
        });
        let familias = JSON.parse(datosEmpresaJSON[0]);   
        let filtros= JSON.parse(datosEmpresaJSON[1]);
        this.selectedTarget.innerHTML=this.render(familias.results, filtros, filteredArray);
        loadJavascriptForCatalogView(products);
             
    }
  
    /** render: Array with two JSONs first element datosEmpresa endpoint and second home endpoint  */
    render(familias, filtros, filteredArray) {
      let html=`
    <div id="categorias">`;
    html+=`
    <h3 class="text-center">Nuestros artículos</h3>
    <h1 class="text-center">Cambiar categoría</h1>
     `;
     familias.forEach(element => {
        html += `
        <a href="#catalogo/${element.codfamilia}"><img src="${element.icono}" alt="${element.nombre}">${element.titulo}</a>
        `;
      });
      html+=`<br>
      <h1 class="text-center">Filtrar productos</h1>
      `;
    html+=`</div>
    <div id="filtros">`;
    html+=`
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
    <label for="camara">Cámara</label>
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
    html+=`</div>
    <div id="productos">`;
    //TODO
    filteredArray.forEach(producto => {
    html+=`
    <div class="flex-container-catalogo__flex-catalogo">
      <p><img src="${producto.imagen}" style="width:250px;height:300px;"></p>
      <p>${producto.descripcion}</p>
      <p>${producto.descripcion_breve}</p>
      <p>${producto.pvp}</p>    
    </div>
    `; 
    html+=`</div>
     `;
    });
    return html;
      
    }
}

export default Catalog;