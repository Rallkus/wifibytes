
let loadJavascriptForContactView = function(){
    let el = document.getElementById('submit');

el.onclick = function() {
  let form={};
  form.val=true;
  form.nombre=document.getElementById('name').value;
  form.email=document.getElementById('email').value;
  form.descripcion=document.getElementById('descripcion').value;
  form.telefono=document.getElementById('telefono').value;

  if(form.nombre === ""){
    document.getElementById("nombre").innerHTML = "No has escrito ningún nombre";
    form.val=false;
  }else{
    document.getElementById("nombre").innerHTML = "";
  }
  if(!form.telefono.match(/^\d{9}$/)){
    document.getElementById("phone").innerHTML = "No has escrito un teléfono válido";
    form.val=false;
  }else{
    document.getElementById("phone").innerHTML = "";
  }
  if(form.descripcion === ""){
    document.getElementById("textarea").innerHTML = "No has escrito ninguna descripción";
    form.val=false;
  }else{
    document.getElementById("textarea").innerHTML = "";
  }
  if(!form.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    document.getElementById("wrongEmail").innerHTML = "No has escrito ningún nombre";
    form.val=false;
  }else{
    document.getElementById("wrongEmail").innerHTML = "";
  }
  if(form.val){
    alert("Mensaje enviado");
    window.location = "http://localhost:8080/";
  }    
  console.log(form);
};
  }
  
   export {loadJavascriptForContactView};