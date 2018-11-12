import contactCtrl from '../../../../src/modules/contact/controller/contactCtrl';

const $ = require('jquery');
//const oldgoogle = window.google.maps.LatLng;

window.google = jest.fn();
const text = {name:"dasds", phone:"45421321864165", address:"dddddd", location_lat:"38.819665", location_long:"38.819665"};
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

describe('get function test to be resolved', function() {
    test('contactCtrl render called', () => {
        console.log(window.google);
        contactCtrl.render(text); 
        console.log("$('#page').children.length=>"+$('#page').children.length);
        expect($('#page').children.length).toBeGreaterThan(1);    
    });
});

