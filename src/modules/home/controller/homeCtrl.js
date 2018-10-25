import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../templates/home.html';

class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        get(Settings.baseURL+'/home').then(function(response) {
            let a = JSON.parse(response);
            a.forEach(element => {
              document.getElementById("page").innerHTML = template(element);
            });   
          }).catch(function(error) {
            console.log("Failed!", error);
          })
       
    }
}
export default HomeController;