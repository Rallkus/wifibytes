import {Router} from './router.js'; //Knows what to do for every single URL 
import {get} from './utils/utils.js';
import {Settings} from './settings';
import HomeController from './modules/home/controller/homeCtrl';
import ContactController from './modules/contact/controller/contactCtrl';
import LogoController from './modules/logo/controller/logoCtrl';

Router
.add(/contact/, function() {
  console.log("Contact");
  ContactController.render();
}).listen()
.add(function() {
    console.log('default');
    HomeController.render();
});


LogoController.render();
HomeController.render();


