import {get} from '../../../utils/utils';
/**This is the legal warning controller */
class legalWarningController {

    constructor() {
        
    }
  
    /** render  */
    static render(text) {
      document.getElementById("page").innerHTML=text[0].content;
    }
}
export default legalWarningController;