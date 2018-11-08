/** This is our template for logo
 * @param logo is the logo itself passed from logoCtrl
 */
let template = function(logo){
    let html = `
    <img src="${logo}" alt="Sergio Huertas logo" width="75px" height="65px">
    `;
    return html;
  }

  export {template};