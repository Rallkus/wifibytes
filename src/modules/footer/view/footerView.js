/** This is the template for the footer
 * @param datos_empresa is the information we got from footerCtrl
*/
let template = function(datos_empresa){
    let html=`
    <a href="${datos_empresa.facebook}" class="fa fa-facebook"></a>
    <a href="${datos_empresa.twitter}" class="fa fa-twitter"></a>
    <a href="#avisolegal">Aviso legal</a>
    <a href="#cookies">Política de cookies</a>
     `;
    return html;
  }
  
   export {template};