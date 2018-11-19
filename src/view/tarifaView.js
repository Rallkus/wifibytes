/**This is the template for any "tarifa" we create, in case there is any "subtarifa" it shows
 * the most relevant details
 * @param datos_tarifa is the data sent by homeCtrl in order to paint the tarifa
*/
let tarifa = function(datos_tarifa){
  let html=`
    <div class="flex-tarifas">
      <p><img src="${datos_tarifa.logo}">${datos_tarifa.nombretarifa}</p>
      <p>${datos_tarifa.pretitulo}</p>
      `;
  if(datos_tarifa.subtarifas.length > 0){
    let subtarifa = datos_tarifa.subtarifas[0];
    if(subtarifa.tipo_tarifa === 1){
      html +=`
        <p>Tarifa móvil</p>
        <p>${subtarifa.subtarifa_cent_minuto} cent/min</p>
        <p>${subtarifa.subtarifa_datos_internet} datos internet</p>
        <p>${subtarifa.subtarifa_minutos_gratis} minutos gratis</p>
      `;
    }else if(subtarifa.tipo_tarifa === 2){
      html +=`
        <p>Tarifa de fijo</p>
      `;
    }else if(subtarifa.tipo_tarifa === 3){
      html +=`
        <p>Tarifa de fibra óptica</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_bajada} megas de fibra óptica de bajada</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_subida} megas de fibra óptica de subida</p>
      `;
    }
    else if(subtarifa.tipo_tarifa === 4){
      html +=`
        <p>Tarifa de wifi</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_bajada} megas de bajada con wifi</p>
        <p>${subtarifa.subtarifa_velocidad_conexion_subida} megas de subido con wifi</p>
      `;
    }else{
      html +=`
        <p>Tarifa de televisión</p>
        <p>${subtarifa.subtarifa_num_canales} canales disponibles</p>
      `;
    }
    html +=`
    </div>
     `;
  }else{
    html +=`
    </div>
     `;
  }
  console.log(datos_tarifa.subtarifas.length);    
    return html;
  }
  let containerTarifa= function(tarifas){
    return `
    <div class="flex-container-tarifas"> 
      ${tarifas} 
    </div>        `;
  }
  
   export {tarifa, containerTarifa};