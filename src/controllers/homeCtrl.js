import {get} from '../utils';
import {Settings} from '../settings';

class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static render() {
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
}
export default HomeController;