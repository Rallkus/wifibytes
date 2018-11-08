import {get} from '../../../utils/utils';
import {template} from '../view/footerView';
/** This is the footer class */
class FooterController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    /** This is the call to the server to get the social information */
    get('/datos_empresa').then(function(response) {
        let datos_empresa = JSON.parse(response);
        /** @param datos_empresa is the information we got from the call */
        document.getElementById("footer").innerHTML = template(datos_empresa);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default FooterController;