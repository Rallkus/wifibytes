import {template} from '../view/headerView';
import Controller from '../../../utils/controller';
/** This is our header class */
class HeaderController extends Controller{
  
    /** render  */
    static render(lang) {
        /**We call our template and paint it */
        document.getElementById("menuShow").innerHTML=template(lang);               
    }
}
export default HeaderController;