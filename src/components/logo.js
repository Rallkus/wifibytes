import Component from "./component";

class Logo extends Component{

    constructor(datosEmpresaJSON,selectRule) { 
        super(datosEmpresaJSON,selectRule);
        let logo = JSON.parse(datosEmpresaJSON);
        this.selectedTarget.innerHTML=this.render(logo.logo);     
    }
  
    /** render: Array with two JSONs first element datosEmpresa endpoint and second home endpoint  */
    render(logo) {        
        return `
        <img src="${logo}" alt="Sergio Huertas logo" width="75px" height="65px">
        `;
    }
}

export default Logo;