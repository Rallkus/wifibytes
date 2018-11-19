import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './modules/home/controller/homeCtrl';
import ContactController from './modules/contact/controller/contactCtrl';
import legalWarningController from './modules/legalWarning/controller/legalWarningCtrl';
import CookiesController from './modules/cookies/controller/cookiesCtrl';
import LogoController from './modules/logo/controller/logoCtrl';
import HeaderController from './modules/header/controller/headerCtrl';
import FooterController from './modules/footer/controller/footerCtrl';
import {get} from './utils/utils';
import {template} from './modules/home/view/homeView'
import TarifasController from './modules/tarifas/controller/tarifasCtrl.js';
/**Here we add our routes to our router */
Router
.add(/contact/, function() {
  console.log("Contact");
  get('/datos_empresa').then(function(response) {
    let datos_empresa = JSON.parse(response);
    /** @param datos_empresa is the information we got from the server 
     * @param mapOptions is the options for the map
    */
   ContactController.render(datos_empresa);
  }).catch(function(error) {
    console.log("Failed!", error);
})
  
})
.add(/tarifas/, function() {
  get('/tarifa/?activo=true').then(function(response) {
    let a = JSON.parse(response);
    TarifasController.render(a);
  }).catch(function(error) {
    console.log("Failed!", error);
  })
  
})
.add(/avisolegal/, function() {
  console.log('Aviso legal');
  /** We get the data of our company in this call */
  get('/datos_empresa').then(function(response) {
    let datos_empresa = JSON.parse(response);
    /** We want to filter all the texts in order to find the one we need to print
     * Also, there is no template here because all the text has his own html
     * saved on server
     */
    let text=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_legal/));
    legalWarningController.render(text);
  }).catch(function(error) {
    console.log("Failed!", error);
})
  
})
.add(/cookies/, function() {
  /** We get the data of our company in this call */
  get('/datos_empresa').then(function(response) {
    let datos_empresa = JSON.parse(response);
    /** We want to filter all the texts in order to find the one we need to print
     * Also, there is no template here because all the text has his own html
     * saved on server
     */
    let text=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_cookies/));
    CookiesController.render(text);
  }).catch(function(error) {
    console.log("Failed!", error);
})
  
})
.listen()
.add(function() {
  /** Here we apply the template so after the gets they have where to print */
  document.getElementById("page").innerHTML = template();
  console.log('default');
  /**This is the call to get the home texts from the server */
  get('/home').then(function(response) {
    let home = JSON.parse(response);
    HomeController.textos(home);
  }).catch(function(error) {
    console.log("Failed!", error);
  })
  /** This is the call to get the tarifas from the server */
  get('/tarifa/?destacado=true').then(function(response) {
    let a = JSON.parse(response);
    HomeController.tarifas(a);
  }).catch(function(error) {
    console.log("Failed!", error);
  })
 
  get('/datos_empresa').then(function(response) {
    let datos_empresa = JSON.parse(response);     
    /** We want to filter all the texts in order to find the one we need to print */
    let data=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_slider/));
    /** @param data is our array filtered */
    HomeController.slider(data);
  }).catch(function(error) {
    console.log("Failed!", error);
  }) 
});
window.onload = function() {
    /** Here we apply the template so after the gets they have where to print */
    document.getElementById("page").innerHTML = template();
    console.log('default');
    /**This is the call to get the home texts from the server */
    get('/home').then(function(response) {
      let home = JSON.parse(response);
      HomeController.textos(home);
    }).catch(function(error) {
      console.log("Failed!", error);
    })
    /** This is the call to get the tarifas from the server */
    get('/tarifa/?destacado=true').then(function(response) {
      let a = JSON.parse(response);
      HomeController.tarifas(a);
    }).catch(function(error) {
      console.log("Failed!", error);
    })
   
    get('/datos_empresa').then(function(response) {
      let datos_empresa = JSON.parse(response);    
      FooterController.render(datos_empresa); 
      LogoController.render(datos_empresa.logo);
      /** We want to filter all the texts in order to find the one we need to print */
      let data=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_slider/));
      /** @param data is our array filtered */
      HomeController.slider(data);
    }).catch(function(error) {
      console.log("Failed!", error);
    }) 
HeaderController.render();
}


