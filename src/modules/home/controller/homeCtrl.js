import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template, textTemplate} from '../view/home.html';
import {tarifa} from '../../../view/tarifa.html';
/** This is our home class */
class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
      /** Here we apply the template so after the gets they have where to print */
      document.getElementById("page").innerHTML = template();
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