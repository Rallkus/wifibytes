import {get} from '../../../utils/utils';
import {template} from '../view/contactView';
import {loadJavascriptForContactView} from '../view/contact';
import {myMap} from '../utils/utils';
/**This is the contact controller */
class ContactController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
    /** We want to initialite mapOptions here because if we do inside the get
     * we can't use it after the get ends and want to save that information for later
     */
    let mapOptions;
    /** We call the template */
    document.getElementById("page").innerHTML = template();
    /** Calling to contact.js to have our js available
     * Got some problems if we do this before having the template so here it is
    */
    loadJavascriptForContactView();
    /** Gettint the data from server and setting the map options */
    get('/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);
      /** @param datos_empresa is the information we got from the server 
       * @param mapOptions is the options for the map
      */
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