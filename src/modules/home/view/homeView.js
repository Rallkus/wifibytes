/** This is the template for all the text included inside the home view
 * @param datos_empresa is the data sent from homeCtrl
 */
let textTemplate = function(datos_empresa){
  let html=`
    <div>
      <div id="titleLeftBox"><h1>${datos_empresa.caja_izquierda_titulo}</h1></div>
        <div id="titleLeftText"><p>${datos_empresa.caja_izquierda_texto}</p></div>
    </div>
    <div>
      <div id="titleRightBox"><h1>${datos_empresa.caja_derecha_titulo}</h1></div>
      <div id="titleRightText"><p>${datos_empresa.caja_derecha_texto}</p></div>
    </div>
   `;
  return html;
}
/** This is the template where we are going to print after we get the info 
* from the calls we made to the server
*/
let template = function(){
  let html = `
  <section id="tarifas" class="tarifas"></section>
  <div id="slider"></div>
  <div class="flex-containerBoxes" id="homeText"></div>
  `;
  return html;
}
/**@param datos_empresa is the data sent from homeCtrl in order to fill up the slider */
let carouselTemplate = function(datos_empresa){
  /** Here we initialiate the html */
  let html=`<!-- Slideshow container -->
    <div class="slideshow-container">
  `;
  /** We want to count in which element we are due to our need to print in what slider we are */
  let i=1;
  /** length is just a variable that makes easier to use datos_empresa.lenght value inside
   * datos_empresa.forEach
   */
  let lenght = datos_empresa.lenght;
  /** We create an slide for each element inside datos_empresa */
  datos_empresa.forEach(element => {
    html += `
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">${i} / ${lenght}</div>
        <img src="${element.image}" style="width:100%">
        <div class="text">${element.content}</div>
      </div>
    `;
    /** As I said, we want to count each time we loop so the incremental */
    i++;
  });
  /** Added the next html */
  html += `
    <!-- Next and previous buttons -->
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
    </div>
    <br>
    <!-- The dots/circles -->
    <div style="text-align:center">
  `;
  /** Same objectives as before, restoring our variable value to 1  */
  i=1;
  /** Printing the dots, we want to put them an id so we can pass that id to 
   * our carousel functions */
  datos_empresa.forEach(element => {
    html += `
    <span class="dot" id="${i}"></span> 
    `;
    i++;
  });
  html += `</div>`;
return html;
}

 export {template, textTemplate, carouselTemplate};