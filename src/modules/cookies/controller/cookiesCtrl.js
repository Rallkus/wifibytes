import {get} from '../../../utils/utils';

/**This is the cookies controller */
class CookiesController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
      /** We get the data of our company in this call */
    get('/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);
      /** We want to filter all the texts in order to find the one we need to print
       * Also, there is no template here because all the text has his own html
       * saved on server
       */
      let a=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_cookies/));
      document.getElementById("page").innerHTML=a[0].content;
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default CookiesController;