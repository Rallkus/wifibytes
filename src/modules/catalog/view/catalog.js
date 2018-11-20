import {catalogo, containerCatalogo} from './catalogView';
let loadJavascriptForCatalogView = function(a){
    let currentLocation = window.location.href.toString().split(window.location.host)[1].split('/');
    console.log(currentLocation);
    let categoria = currentLocation.length===3? currentLocation[2]:"";
    let marca = 0;
    let pulgadas=0;
    let ram=0;
    let procesador=0;
    let camara=0;
    let productos = a;
    let catalog = [];
    let items = "";
    console.log(productos);
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);
    let marcaSelect = document.getElementById('marca');
    marcaSelect.onchange = (event) => {
    marca = event.target.value;
    console.log(marca);
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    console.log(catalog);
    items = "";
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);

 }
    let pulgadasSelect = document.getElementById('pulgadas');
    pulgadasSelect.onchange = (event) => {
    pulgadas = event.target.value;
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    console.log(pulgadas);
    console.log(catalog);
    items = "";
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);
 }
    let ramSelect = document.getElementById('ram');
    ramSelect.onchange = (event) => {
    ram = event.target.value;
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    console.log(ram);
    console.log(catalog);
    items = "";
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);
 }
    let procesadorSelect = document.getElementById('procesador');
    procesadorSelect.onchange = (event) => {
    procesador = event.target.value;
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    console.log(procesador);
    console.log(catalog);
    items = "";
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);
 }
    let camaraSelect = document.getElementById('camara');
    camaraSelect.onchange = (event) => {
    camara = event.target.value;
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    console.log(camara);
    console.log(catalog);
    items = "";
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);
 }

}
export {loadJavascriptForCatalogView};