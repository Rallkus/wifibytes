/** The function to print the map
 * @param mapOptions are the options to the map defined in contactCtrl
 * @param datos_empresa is the data get from the server
 */
function myMap(mapOptions, datos_empresa) {
  /** @param mapa is the map in html */
    let mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
    /** Adding a marker */
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(datos_empresa.location_lat, datos_empresa.location_long),
      map: mapa,
      title: 'Here we are!'
    });
    marker.setMap(mapa);
    /** html for the info window */
    let contentString = `
    <h1>${datos_empresa.name}</h1>
    <p> Dirección: ${datos_empresa.address}</p>
    <p> Tlf de contacto: ${datos_empresa.phone}</p>
    `;
  
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(mapa, marker);
    });
    }
  

  export {myMap};