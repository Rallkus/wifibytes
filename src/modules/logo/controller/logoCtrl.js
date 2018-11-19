import {template} from '../view/logoView';
import Controller from '../../../utils/controller';
/**This is our logo class where the logo is get from the server and showed in the html */
class LogoController extends Controller{
  
    /** render  */
    static render(logo) {
        document.getElementById("logo").innerHTML =template(logo);
       
    }
}
export default LogoController;