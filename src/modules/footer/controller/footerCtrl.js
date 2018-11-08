import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/footerView';
/** This is the footer class */
class FooterController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    /** This is the call to the server to get the social information */
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
        let datos_empresa = JSON.parse(response);
        document.getElementById("footer").innerHTML = template(datos_empresa);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default FooterController;