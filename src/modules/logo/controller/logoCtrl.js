import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/logoView';
/**This is our logo class where the logo is get from the server and showed in the html */
class LogoController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        /** This is our call to server in order to get the logo and paint it in html */
        get(Settings.baseURL+'/datos_empresa').then(function(response) {
            let datos_empresa = JSON.parse(response);
            /**After we get the logo here is how we put it in html */
            document.getElementById("logo").innerHTML =template(datos_empresa.logo);
          }).catch(function(error) {
            console.log("Failed!", error);
        })
       
    }
}
export default LogoController;