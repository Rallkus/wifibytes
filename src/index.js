import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './modules/home/controller/homeCtrl';
import ContactController from './modules/contact/controller/contactCtrl';
import legalWarningController from './modules/legalWarning/controller/legalWarningCtrl';
import CookiesController from './modules/cookies/controller/cookiesCtrl';
import LogoController from './modules/logo/controller/logoCtrl';
import HeaderController from './modules/header/controller/headerCtrl';
import FooterController from './modules/footer/controller/footerCtrl';
/**Here we add our routes to our router */
Router
.add(/contact/, function() {
  console.log("Contact");
  ContactController.render();
})
.add(/avisolegal/, function() {
  console.log('Aviso legal');
  legalWarningController.render();
})
.add(/cookies/, function() {
  console.log('Cookies');
  CookiesController.render();
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


