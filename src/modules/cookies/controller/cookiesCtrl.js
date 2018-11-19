import {get} from '../../../utils/utils';
import Controller from '../../../utils/controller';
/**This is the cookies controller */
class CookiesController extends Controller{
  
    /** render  */
    static render(text) {
      document.getElementById("page").innerHTML=text[0].content;
    }
}
export default CookiesController;