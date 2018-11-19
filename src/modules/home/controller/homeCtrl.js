import {textTemplate, carouselTemplate} from '../view/homeView';
import {tarifa, containerTarifa} from '../../../view/tarifaView';
import {loadJavascriptForHomeView} from '../view/home';
/** This is our home class */
class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static slider(data) {     
      document.getElementById("slider").innerHTML=carouselTemplate(data);
    /** We load all the js needed for the carousel with the next sentence, this js is in
     * home.js
     */
    loadJavascriptForHomeView();    

    }

    static textos(home){
      document.getElementById("homeText").innerHTML = textTemplate(home[0]);
    }
    static tarifas(a){
      let tarifas = "";
      /** We filter our array in order to get the ones we want to show up in our home */
      let filteredArray = a.results;
      filteredArray.forEach(element => {
        /** each @param element is a tarifa */
        tarifas += tarifa(element);
      });
      /** Now we add the container for tarifas */
      let result = containerTarifa(tarifas);
      document.getElementById("tarifas").innerHTML = result;
    }
}
export default HomeController;