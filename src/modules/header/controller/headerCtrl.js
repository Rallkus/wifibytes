import {template} from '../view/header.html';

class HeaderController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        window.onload = function() {
            document.getElementById("menuShow").innerHTML=template();
        }        
    }
}
export default HeaderController;