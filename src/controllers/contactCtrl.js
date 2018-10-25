import {get} from '../utils';
import {Settings} from '../settings';

class ContactController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
        function myMap(mapOptions, myLatlng, datos_empresa) {
            let mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
            let marker = new google.maps.Marker({
              position: myLatlng,
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
        /**/
 
        let mapOptions;
    let contactPage='<div class="flex-containerBoxes">'+
    '<div>'+
      '<div><form id="contact_form">'+
      '<input type="text" id="name" placeholder="Nombre y apellidos"><br>'+
      '<input type="text" id="email" placeholder="Email"><br>'+
      '<input type="textarea" id="comentario"><br>'+
      '<input type="submit" value="Enviar">'+
      '</form></div>'+
    '</div>'+
    '<div id="map" style="width:400px;height:400px">'+
  '</div>';
    document.getElementById("page").innerHTML = contactPage;
    get(Settings.baseURL+'/datos_empresa').then(function(response) {
      let a = JSON.parse(response);
      console.log(a);
      let myLatlng = new google.maps.LatLng(a.location_lat, a.location_long);
      mapOptions = {
        center: myLatlng,
        zoom: 16,
    }
    myMap(mapOptions, myLatlng, a);
    }).catch(function(error) {
      console.log("Failed!", error);
  })
    }
}
export default ContactController;