import {get} from './utils';
import {Settings} from './settings';
import HomeController from './modules/home/controller/homeCtrl';
import ContactController from './modules/contact/controller/contactCtrl';

window.onclick = function(e) { 
  if(e.target.id==='home'){
    HomeController.render();
  }else if(e.target.id === 'contact'){
    ContactController.render();
  }
  };

get(Settings.baseURL+'/datos_empresa').then(function(response) {
    let datos_empresa = JSON.parse(response);
    document.getElementById("logo").innerHTML = '<img src="'+datos_empresa.logo+'" alt="Sergio Huertas logo">';
  }).catch(function(error) {
    console.log("Failed!", error);
})

HomeController.render();


