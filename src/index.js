import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './modules/home/controller/homeCtrl';
import ContactController from './modules/contact/controller/contactCtrl';
import LogoController from './modules/logo/controller/logoCtrl';
import HeaderController from './modules/header/controller/headerCtrl';

Router
.add(/contact/, function() {
  console.log("Contact");
  ContactController.render();
}).listen()
.add(function() {
    console.log('default');
    HomeController.render();
});
HeaderController.render();
LogoController.render();
HomeController.render();


