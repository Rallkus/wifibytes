const legalWarning=require('../src/modules/legalWarning/controller/legalWarningCtrl');
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

test('Primer test select Person list html tag is filled first time', () => {
    legalWarning.default.render();
    //setTimeout(2000);
    $('page').text('test');
    console.log($('page').val());
    expect($('#page')).toBeGreaterThan(1);  
});


/*test('Second test we check adding new operand inputs is working', () => {
  //At the beginning only one input is present
  expect($('#operands input').length).toBe(1);
  // Use jquery to emulate a click on our button  
  $('#buttonNewOperand').click();
  //After clicking we get two operand inputs
  expect($('#operands input').length).toBe(2);
});*/