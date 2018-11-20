/** This is the header's template*/
let template = function(lang){
    let html=`
    <div class="meter">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#"><li>${lang.Home}</li></a>
              <a href="#contact"><li>${lang.Contact}</li></a>
              <a href="#tarifas"><li>${lang.Tarifas}</li></a>
              <a href="#catalogo"><li>${lang.Catalogo}</li></a>
            </ul>
          </div>
          <button type="button" id="ES">${lang.Spanish}</button>
          <button type="button" id="VAL">${lang.Valenciano}</button>
        </nav>
      </div>
     `;
    return html;
  }
  
   export {template};