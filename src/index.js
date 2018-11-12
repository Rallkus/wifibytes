import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './modules/home/controller/homeCtrl';
import ContactController from './modules/contact/controller/contactCtrl';
import legalWarningController from './modules/legalWarning/controller/legalWarningCtrl';
import CookiesController from './modules/cookies/controller/cookiesCtrl';
import LogoController from './modules/logo/controller/logoCtrl';
import HeaderController from './modules/header/controller/headerCtrl';
import FooterController from './modules/footer/controller/footerCtrl';
import {get} from './utils/utils';
/**Here we add our routes to our router */
Router
.add(/contact/, function() {
  console.log("Contact");
  ContactController.render();
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
    console.log('default');
    HomeController.render();
});
window.onload = function() {
HeaderController.render();
LogoController.render();
FooterController.render();
HomeController.render();
}


