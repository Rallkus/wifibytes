import Component from "./component";

class Header extends Component{

    constructor(datosEmpresaJSON,selectRule) { 
        super(datosEmpresaJSON,selectRule);
        this.selectedTarget.innerHTML=this.render();     
    }
  
    /** render: Array with two JSONs first element datosEmpresa endpoint and second home endpoint  */
    render() {        
        return `
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
                  <a href="#tarifas"><li>Tarifas</li></a>
                  <a href="#catalogo"><li>Catálogo</li></a>
                </ul>
              </div>
              <button type="button" class="menu__buttonMenu--black" id="ES">Español</button>
              <button type="button" class="menu__buttonMenu--black" id="VAL">Valenciano</button>
            </nav>
          </div>
         `;
    }
}

export default Header;