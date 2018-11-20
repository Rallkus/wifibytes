import Controller from '../../../utils/controller';
import {template, catalogo, filtrosTemplate, containerCatalogo} from '../view/catalogView';
import {loadJavascriptForCatalogView} from '../view/catalog';
/** This is our catalog class */
class CatalogController extends Controller{
  
    /** This downloads the categories  */
    static categorias(categorias, lang){
        document.getElementById("categorias").innerHTML = template(categorias.results, lang);
    }
    /** filtros add the filter template */
    static filtros(filtros, lang){
        console.log(filtros.marca[0]);
        document.getElementById("filtros").innerHTML = filtrosTemplate(filtros, lang);
    }
    /** catalogo prints the products */
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