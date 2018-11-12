import cookiesCtrl from '../../../../src/modules/cookies/controller/cookiesCtrl';

const text = [{key: "jumbotron_legal", content:"dddddddddddddddddddddddddddddd"}]
const $ = require('jquery');
beforeEach(()=> {
    // Set up our document body
  document.body.innerHTML =`<!DOCTYPE html>
  <html lang="es">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <title>title</title>
      <script type="text/javascript" src="main.js"></script>
    
      <script> </script>
    </head>
    <body>
      <section>
          <div class="flex-container">
            <div id="page"></div>            
          </div>     
      </section>
    </body>
    
  </html>`;

function fakeDOMLoaded() {
  const fakeEvent = document.createEvent('Event');

  fakeEvent.initEvent('DOMContentLoaded', true, true);
  window.document.dispatchEvent(fakeEvent);
}

fakeDOMLoaded();
  
});


test('legalWarningCtrl render called', () => {
    cookiesCtrl.render(text); 
  console.log("$('#page').children.length=>"+$('#page').children.length);
  expect($('#page').children.length).toBeGreaterThan(1);    
});