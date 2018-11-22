let catalogo = function(producto){
  let html=`
    <div class="flex-catalogo">
      <p><img src="${producto.imagen}" style="width:250px;height:300px;"></p>
      <p>${producto.descripcion}</p>
      <p>${producto.descripcion_breve}</p>
      <p>${producto.pvp}</p>    
    </div>
    `;  
    return html;
  }
  let containerCatalogo= function(productos){
    return `
    <div class="flex-container-catalogo"> 
      ${productos} 
    </div>        `;
  }
  
   export {catalogo, containerCatalogo};