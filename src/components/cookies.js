import Component from "./component";

class Cookies extends Component {

    constructor(datosEmpresaJSON,selectRule) {   
        super(datosEmpresaJSON,selectRule);
        let text=datosEmpresaJSON.textos.filter(datos => datos.key.match(/jumbotron_cookies/));      
        this.selectedTarget.innerHTML=text[0].content;
    }
};

export default Cookies; 