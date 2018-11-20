import Controller from '../../../utils/controller';
import {template, catalogo, filtrosTemplate, containerCatalogo} from '../view/catalogView';
import {loadJavascriptForCatalogView} from '../view/catalog';
/** This is our home class */
class CatalogController extends Controller{
  
    /** render  */
    static categorias(categorias){
        document.getElementById("categorias").innerHTML = template(categorias.results);
    }

    static filtros(filtros){
        console.log(filtros.marca[0]);
        document.getElementById("filtros").innerHTML = filtrosTemplate(filtros);
    }
    static catalogo(productos){
        let products = [];
        let items = "";
        let filteredArray = productos.results;
        filteredArray.forEach(element => {
            /** each @param element is a product */
            products.push(element);
            items += catalogo(element);
        });
        loadJavascriptForCatalogView(products);
    }
}
export default CatalogController;