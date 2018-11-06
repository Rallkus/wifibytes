import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/contact.html';
import {loadJavascriptForContactView} from '../view/contact';
import {myMap} from '../utils/utils';

class ContactController {

    constructor() {
        
    }
  
    /** render  */
    static render() {

    let mapOptions;
    document.getElementById("page").innerHTML = template();
    loadJavascriptForContactView();
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);
      mapOptions = {
        center: new google.maps.LatLng(datos_empresa.location_lat, datos_empresa.location_long),
        zoom: 16,
    }
    myMap(mapOptions, datos_empresa);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default ContactController;