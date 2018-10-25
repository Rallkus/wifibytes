import {get} from './utils';
import {Settings} from './settings';
import HomeController from './controllers/homeCtrl';
import ContactController from './controllers/contactCtrl';



function getContact() {
    ContactController.render();
}

function getHome() {
  HomeController.render();
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


