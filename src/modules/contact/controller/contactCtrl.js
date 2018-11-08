import {get} from '../../../utils/utils';
import {Settings} from '../../../settings';
import {template} from '../view/contactView';
import {loadJavascriptForContactView} from '../view/contact';
import {myMap} from '../utils/utils';
/**This is the contact controller */
class ContactController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    
    let mapOptions;
    document.getElementById("page").innerHTML = template();
    /** Calling to contact.js */
    loadJavascriptForContactView();
    /** Gettint the data from server and setting the map options */
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);
      mapOptions = {
        center: new google.maps.LatLng(datos_empresa.location_lat, datos_empresa.location_long),
        zoom: 16,
    }
    /** Calling to myMap inside utils to print the map */
    myMap(mapOptions, datos_empresa);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default ContactController;