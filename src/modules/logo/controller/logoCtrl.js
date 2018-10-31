import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';

class LogoController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        get(Settings.baseURL+'/datos_empresa').then(function(response) {
            let datos_empresa = JSON.parse(response);
            document.getElementById("logo").innerHTML = '<img src="'+datos_empresa.logo+'" alt="Sergio Huertas logo" width="75px" height="65px">';
          }).catch(function(error) {
            console.log("Failed!", error);
        })
       
    }
}
export default LogoController;