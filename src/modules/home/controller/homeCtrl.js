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
        let a=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_slider/));
        console.log(a);
        document.getElementById("slider").innerHTML=carouselTemplate(a);
        loadJavascriptForHomeView();  
      }).catch(function(error) {
        console.log("Failed!", error);
      })   
      /**This is the call to get the home texts from the server */
      get(Settings.baseURL+'/home').then(function(response) {
        let home = JSON.parse(response);     
        home.forEach(element => {
          document.getElementById("homeText").innerHTML = textTemplate(element);
        });   
      }).catch(function(error) {
        console.log("Failed!", error);
      })
      /** This is the call to get the tarifas from the server */
      get(Settings.baseURL+'/tarifa').then(function(response) {
        let a = JSON.parse(response);
        let tarifas = "";
        a.results.forEach(element => {
          console.log(element);
          tarifas += tarifa(element);
        });
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