import {Router} from './router.js'; //Knows what to do for every single URL 
import Contact from './components/contact';
import LegalWarning from "./components/legalWarning";
import Cookies from "./components/cookies";
import Footer from "./components/footer";
import Tarifas from "./components/tarifas";
import Logo from "./components/logo";
import Header from "./components/header";
import Catalog from "./components/catalog";
import {get} from './utils/utils';
import {createCookie} from './utils/cookies';
import Home from './components/home.js';
/**Here we add our routes to our router */
Router
.add(/contact/, function() {
  console.log("Contact");
  get('/datos_empresa').then(function(response) {
    let datos_empresa = JSON.parse(response);
    /** @param datos_empresa is the information we got from the server 
     * @param mapOptions is the options for the map
    */
   new Contact(datos_empresa,"#page"); 
  }).catch(function(error) {
    console.log("Failed!", error);
})
  
})
.add(/catalog/, function() {
  Promise.all([get("/familia"), get("/filtros"),get("/articulo")]).then(function(results) {
    new Catalog(results, "#page");
  }) 
  
})
.add(/tarifas/, function() {
  get('/tarifa/?activo=true').then(function(response) {
    new Tarifas(response, "#page");
  }).catch(function(error) {
    console.log("Failed!", error);
  })
  
})
.add(/avisolegal/, function() {
  console.log('Aviso legal');
  /** We get the data of our company in this call */
  get('/datos_empresa').then(function(response) {
    new LegalWarning(response,"#page");
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
    new Cookies(datos_empresa,"#page"); 
  }).catch(function(error) {
    console.log("Failed!", error);
})
  
})
.listen()
.add(function() {
  Promise.all([get("/tarifa/?destacado=true"), get("/datos_empresa"),get("/home")]).then(function(results) {
    // three promises resolved 
    /*HomeController.textos(results[2]);
    HomeController.tarifas(results[0]);
    HomeController.slider(results[1]);*/
    new Home(results, "#page");
    //try {new Home([results[0],results[2]],"#main"); }catch(e){console.log(e);}
  }) 
});
document.addEventListener("DOMContentLoaded", function() {    
  Promise.all([get("/tarifa/?destacado=true"), get("/datos_empresa"),get("/home")]).then(function(results) {
  // three promises resolved 
  new Home(results, "#page");
  new Footer(results[1],"#footer"); 
  new Logo(results[1],"#logo"); 
  new Header(results[1],"#menuShow");
  //try {new Home([results[0],results[2]],"#main"); }catch(e){console.log(e);}
})  
document.addEventListener('click',function(e){
if(e.target && e.target.id== 'ES'){
  console.log("hola");
    createCookie("lang", "ES");
    location.reload();
}else if(e.target && e.target.id== 'VAL'){
  console.log(window.location.href);
  createCookie("lang", "VAL");
  location.reload();
}
})
});



