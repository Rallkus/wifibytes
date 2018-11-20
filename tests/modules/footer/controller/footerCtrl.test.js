import footerCtrl from '../../../../src/modules/footer/controller/footerCtrl';
import {lang} from '../../../../src/utils/languages/language';

const rrss = {facebook:"paco", twitter:"perolo"};
const $ = require('jquery');
beforeAll(()=>{
      // Set up our document body
  document.body.innerHTML =`<!DOCTYPE html>
  <html lang="es">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <title>title</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="style.css">
      <script type="text/javascript" src="main.js"></script>
    
      <script> </script>
    </head>
    <body>
      <header id="menuShow">
      </header>
      <section>
          <div class="flex-container">
            <div class="firstElementFlex" id="logo"></div>
            <div id="page"></div>            
          </div>     
      </section>
      <footer id="footer">
      </footer>
    </body>
    
  </html>`;
})

test('We check if HeaderController is called', () => {
    footerCtrl.render(rrss, lang);
    expect($('#footer').children.length).toBeGreaterThan(1);    
});