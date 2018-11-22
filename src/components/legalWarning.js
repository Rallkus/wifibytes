import Component from "./component";

class LegalWarning extends Component {

    constructor(datosEmpresaJSON,selectRule) {   
        super(datosEmpresaJSON,selectRule);
        let datos_empresa = JSON.parse(datosEmpresaJSON);
        /** We want to filter all the texts in order to find the one we need to print
         * Also, there is no template here because all the text has his own html
         * saved on server
         */
        let text=datos_empresa.textos.filter(datos => datos.key.match(/jumbotron_legal/));      
        this.selectedTarget.innerHTML=text[0].content;
    }
};

export default LegalWarning; 