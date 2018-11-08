import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
/**This is the legal warning controller */
class legalWarningController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
      /** We get the data of our company in this call */
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);
      /** We want to filter all the texts in order to find the one we need to print
       * Also, there is no template here because all the text has his own html
       * saved on server
       */
      let text=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_legal/));
      document.getElementById("page").innerHTML=text[0].content;
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default legalWarningController;