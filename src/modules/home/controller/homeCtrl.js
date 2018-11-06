import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/home.html';
import {tarifa} from '../../../view/tarifa.html';

class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        get(Settings.baseURL+'/home').then(function(response) {
            let home = JSON.parse(response);
            document.getElementById("page").innerHTML ="";
            home.forEach(element => {
              document.getElementById("page").innerHTML = template(element);
            });   
          }).catch(function(error) {
            console.log("Failed!", error);
          })
        
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