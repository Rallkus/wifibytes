import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
/**This is our logo class where the logo is get from the server and showed in the html */
class LogoController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        get(Settings.baseURL+'/datos_empresa').then(function(response) {
            let datos_empresa = JSON.parse(response);
            /**After we get the logo here is how we put it in html */
            document.getElementById("logo").innerHTML =`
             <img src="${datos_empresa.logo}" alt="Sergio Huertas logo" width="75px" height="65px">
             `;
          }).catch(function(error) {
            console.log("Failed!", error);
        })
       
    }
}
export default LogoController;