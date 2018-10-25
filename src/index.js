import {get} from './utils';
import {Settings} from './settings';

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

function getContact() {
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

function getHome() {
  get(Settings.baseURL+'/home').then(function(response) {
    //console.log("Success!", response);
    let leftTitle="";
    let rightTitle="";
    let leftText="";
    let rightText="";
    let homePage='';
    let a = JSON.parse(response);
    a.forEach(element => {
      if(element.lang === "ES"){
        leftTitle=element.caja_izquierda_titulo;
        rightTitle=element.caja_derecha_titulo;
        leftText=element.caja_izquierda_texto;
        rightText=element.caja_derecha_texto;
        homePage+='<div class="flex-containerBoxes">'+
    '<div>'+
      '<div id="titleLeftBox"><h1>'+leftTitle+'</h1></div>'+
        '<div id="titleLeftText"><p>'+leftText+'</p></div>'+
    '</div>'+
    '<div>'+
      '<div id="titleRightBox"><h1>'+rightTitle+'</h1></div>'+
      '<div id="titleRightText"><p>'+rightText+'</p></div>'+
    '</div>'+
  '</div>';
        /*document.getElementById("titleLeftBox").innerHTML = '<h1>'+element.caja_izquierda_titulo+'</h1>';
        document.getElementById("titleLeftText").innerHTML = '<p>'+element.caja_izquierda_texto+'<p>';
        document.getElementById("titleRightBox").innerHTML = '<h1>'+element.caja_derecha_titulo+'</h1>';
        document.getElementById("titleRightText").innerHTML = '<p>'+element.caja_derecha_texto+'<p>';*/
      }
    });
    document.getElementById("page").innerHTML = homePage;
  }).catch(function(error) {
    console.log("Failed!", error);
  })
}

window.onclick = function(e) { 
  if(e.target.id==='home'){
    getHome();
  }else if(e.target.id === 'contact'){
    getContact();
  }
  };

get(Settings.baseURL+'/datos_empresa').then(function(response) {
    let a = JSON.parse(response);
    document.getElementById("logo").innerHTML = '<img src="'+a.logo+'" alt="Sergio Huertas logo">';
  }).catch(function(error) {
    console.log("Failed!", error);
})

getHome();


