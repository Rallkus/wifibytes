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
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'marca'){
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
        }else if(e.target && e.target.id== 'pulgadas'){
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
        }else if(e.target && e.target.id== 'ram'){
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
        }else if(e.target && e.target.id== 'procesador'){
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
        }else if(e.target && e.target.id== 'camara'){
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
    
    })
    catalog = productos.filter(item => ( categoria == ""? true:item.codfamilia == categoria) && (marca == 0? true:item.marca == marca) && (pulgadas == 0? true:item.pantalla == pulgadas) && (ram == 0? true:item.ram == ram) && (procesador == 0? true:item.procesador == procesador) && (camara == 0? true:item.camara == camara));
    catalog.forEach(element => {
        /** each @param element is a product */
        items += catalogo(element);
    });
    document.getElementById("productos").innerHTML = containerCatalogo(items);

}
export {loadJavascriptForCatalogView};