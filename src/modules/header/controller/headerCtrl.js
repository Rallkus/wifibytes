import {template} from '../view/header.html';

class HeaderController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        document.getElementById("menuShow").innerHTML=template();               
    }
}
export default HeaderController;