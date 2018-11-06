import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/footer.html';

class FooterController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
        let datos_empresa = JSON.parse(response);
        document.getElementById("footer").innerHTML = template(datos_empresa);
        //a.
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default FooterController;