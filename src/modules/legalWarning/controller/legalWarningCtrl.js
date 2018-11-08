import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
/**This is the legal warning controller */
class legalWarningController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);

      let a=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_legal/));
      console.log(a);
      document.getElementById("page").innerHTML=a[0].content;
      //document.getElementById("ley_aplicable").innerHTML=a.filter(datos => datos.key.match(/ley_aplicable/))[0].content;
      //console.log(datos_empresa.textos);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default legalWarningController;