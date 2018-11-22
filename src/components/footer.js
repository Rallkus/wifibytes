import Component from "./component";

class Footer extends Component{

    constructor(datosEmpresaJSON,selectRule) { 
        super(datosEmpresaJSON,selectRule);
        this.selectedTarget.innerHTML=this.render(this.inputJSON);     
    }
  
    /** render: Array with two JSONs first element datosEmpresa endpoint and second home endpoint  */
    render(datosEmpresaHome) {        
        return `
        <a href="${datosEmpresaHome.facebook}" class="fa fa-facebook"></a>
        <a href="${datosEmpresaHome.twitter}" class="fa fa-twitter"></a>
        <a href="#avisolegal">Aviso legal</a>
        <a href="#cookies">Cookies</a>
         `;
    }
}

export default Footer;
