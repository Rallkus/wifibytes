import {template} from '../view/footerView';
import Controller from '../../../utils/controller';
/** This is the footer class */
class FooterController extends Controller{
  
    /** render  */
    static render(datos_empresa) {
        /** @param datos_empresa is the information we got from the call */
        document.getElementById("footer").innerHTML = template(datos_empresa);
    }
}
export default FooterController;