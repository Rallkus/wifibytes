import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template, textTemplate, carouselTemplate} from '../view/homeView';
import {tarifa} from '../../../view/tarifaView';
import {loadJavascriptForHomeView} from '../view/home';
/** This is our home class */
class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static render() {     
      /** Here we apply the template so after the gets they have where to print */
      document.getElementById("page").innerHTML = template(); 
      get(Settings.baseURL+'/datos_empresa').then(function(response) {
        let datos_empresa = JSON.parse(response);     
        /** We want to filter all the texts in order to find the one we need to print */
        let data=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_slider/));
        /** @param data is our array filtered */
        document.getElementById("slider").innerHTML=carouselTemplate(data);
        /** We load all the js needed for the carousel with the next sentence, this js is in
         * home.js
         */
        loadJavascriptForHomeView();  
      }).catch(function(error) {
        console.log("Failed!", error);
      })   
      /**This is the call to get the home texts from the server */
      get(Settings.baseURL+'/home').then(function(response) {
        let home = JSON.parse(response);
        /** We loop home because it always has 2 texts and are inside the first array*/     
        document.getElementById("homeText").innerHTML = textTemplate(home[0]);
      }).catch(function(error) {
        console.log("Failed!", error);
      })
      /** This is the call to get the tarifas from the server */
      get(Settings.baseURL+'/tarifa').then(function(response) {
        let a = JSON.parse(response);
        let tarifas = "";
        /** We filter our array in order to get the ones we want to show up in our home */
        let filteredArray = a.results.filter(datos => datos.destacado);
        filteredArray.forEach(element => {
          /** each @param element is a tarifa */
          tarifas += tarifa(element);
        });
        /** Now we add the container for tarifas */
        let result = `
        <div class="flex-container-tarifas"> 
          ${tarifas} 
        </div>
        `;
        document.getElementById("tarifas").innerHTML = result;
      }).catch(function(error) {
        console.log("Failed!", error);
      })
       
    }
}
export default HomeController;