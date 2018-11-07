import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/legalWarning.html';
/**This is the legal warning controller */
class legalWarningController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    document.getElementById("page").innerHTML = template();
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);

      let a=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_legal/));
      console.log(a);
      document.getElementById("datos_generales").innerHTML=a.filter(datos => datos.key.match(/datos_generales/))[0].content;
      document.getElementById("politica_privacidad").innerHTML=a.filter(datos => datos.key.match(/politica_privacidad/))[0].content;
      document.getElementById("condiciones_uso").innerHTML=a.filter(datos => datos.key.match(/condiciones_uso/))[0].content;
      document.getElementById("responsabilidades").innerHTML=a.filter(datos => datos.key.match(/responsabilidades/))[0].content;
      document.getElementById("propiedad_intelectual").innerHTML=a.filter(datos => datos.key.match(/propiedad_intelectual/))[0].content;
      document.getElementById("ley_aplicable").innerHTML=a.filter(datos => datos.key.match(/ley_aplicable/))[0].content;
      //console.log(datos_empresa.textos);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default legalWarningController;