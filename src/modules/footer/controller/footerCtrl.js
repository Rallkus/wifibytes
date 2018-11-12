import {get} from '../../../utils/utils';
import {template} from '../view/footerView';
/** This is the footer class */
class FooterController {

    constructor() {
        
    }
  
    /** render  */
    static render(datos_empresa) {
        /** @param datos_empresa is the information we got from the call */
        document.getElementById("footer").innerHTML = template(datos_empresa);
    }
}
export default FooterController;