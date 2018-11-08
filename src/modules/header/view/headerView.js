/** This is the header's template*/
let template = function(){
    let html=`
    <div class="meter">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </div>
        </nav>
      </div>
     `;
    return html;
  }
  
   export {template};