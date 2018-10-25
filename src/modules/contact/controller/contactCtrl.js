import {get} from '../../../utils';
import {Settings} from '../../../settings';
import {template} from '../templates/contact.html';

function myMap(mapOptions, datos_empresa) {
  let mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(datos_empresa.location_lat, datos_empresa.location_long),
    map: mapa,
    title: 'Here we are!'
  });
  marker.setMap(mapa);
  let contentString = '<h1>'+datos_empresa.name+'</h1>'+
  '<p> Dirección: '+datos_empresa.address+'</p>'+
  '<p> Tlf de contacto: '+datos_empresa.phone+'</p>';

  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(mapa, marker);
  });
  }

class ContactController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
      
    let mapOptions;
    let contactPage=template();
    document.getElementById("page").innerHTML = contactPage;
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let a = JSON.parse(response);
      console.log(a);
      mapOptions = {
        center: new google.maps.LatLng(a.location_lat, a.location_long),
        zoom: 16,
    }
    myMap(mapOptions, a);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default ContactController;