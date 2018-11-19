import {tarifa, containerTarifa} from '../../../view/tarifaView';
/** This is our tarifas class */
class TarifasController {

    constructor() {
        
    }
  
    /** render  */
    static render(a){
        let tarifas = "";
        /** We filter our array in order to get the ones we want to show up in our home */
        let filteredArray = a.results;
        console.log(filteredArray);
        filteredArray.forEach(element => {
          /** each @param element is a tarifa */
          tarifas += tarifa(element);
        });
        /** Now we add the container for tarifas */
        let result = containerTarifa(tarifas);
        document.getElementById("page").innerHTML = result;
      }
}
export default TarifasController;