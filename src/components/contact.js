import Component from "./component";
import {loadJavascriptForContactView} from '../modules/contact/view/contact';
import {myMap} from '../modules/contact/utils/utils';

class Contact extends Component{

    constructor(datosEmpresaJSON,selectRule) { 
        super(datosEmpresaJSON,selectRule);
        /** We want to initialite mapOptions here because if we do inside the get
         * we can't use it after the get ends and want to save that information for later
         */
        let mapOptions;
        this.selectedTarget.innerHTML=this.render();  
        loadJavascriptForContactView();
    /** @param datos_empresa is the information we got from the server 
       * @param mapOptions is the options for the map
      */
     mapOptions = {
      center: new google.maps.LatLng(datosEmpresaJSON.location_lat, datosEmpresaJSON.location_long),
      zoom: 16,
  }
  /** Calling to myMap inside utils to print the map */
  myMap(mapOptions, datosEmpresaJSON);
    }
  
    /** render: Array with two JSONs first element datosEmpresa endpoint and second home endpoint  */
    render() {        
        return `
  
        <div class="flex-containerBoxes">
          <div>
            <form name="contact_form">
            <input type="text" id="name" placeholder="Nombre y apellidos"><br>
            <p id="nombre" style="color:#FF0000";></p>
            <input type="number" id="telefono" placeholder="Número de teléfono"><br>
            <p id="phone" style="color:#FF0000";></p>
            <input type="email" id="email" placeholder="Email"><br>
            <p id="wrongEmail" style="color:#FF0000";></p>
            <input type="textarea" id="descripcion" cols="10" rows="10"><br>
            <p id="textarea" style="color:#FF0000";></p>
            <input type="button" id="submit" value="Enviar">
            </form>
          </div>
          <div id="map" style="width:400px;height:400px">
        </div>
         `;
    }
}

export default Contact;