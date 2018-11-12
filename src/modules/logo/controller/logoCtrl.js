import {get} from '../../../utils/utils';
import {template} from '../view/logoView';
/**This is our logo class where the logo is get from the server and showed in the html */
class LogoController {

    constructor() {
        
    }
  
    /** render  */
    static render(logo) {
        document.getElementById("logo").innerHTML =template(logo);
       
    }
}
export default LogoController;