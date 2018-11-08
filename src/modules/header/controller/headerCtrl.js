import {template} from '../view/headerView';
/** This is our header class */
class HeaderController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        /**We call our template and paint it */
        document.getElementById("menuShow").innerHTML=template();               
    }
}
export default HeaderController;