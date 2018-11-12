import {get} from '../../../utils/utils';

/**This is the cookies controller */
class CookiesController {

    constructor() {
        
    }
  
    /** render  */
    static render(text) {
      document.getElementById("page").innerHTML=text[0].content;
    }
}
export default CookiesController;