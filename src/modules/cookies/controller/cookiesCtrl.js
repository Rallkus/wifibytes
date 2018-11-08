import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';

/**This is the cookies controller */
class CookiesController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);

      let a=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_cookies/));
      console.log(a);
      document.getElementById("page").innerHTML=a[0].content;
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default CookiesController;