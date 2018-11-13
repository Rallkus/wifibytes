import {template} from '../../../../src/modules/contact/view/contactView';

test('contact template working', () => {
    expect(template()).toBe(`
  
    <div class="flex-containerBoxes">
      <div>
        <form name="contact_form">
        <input type="text" id="name" placeholder="Nombre y apellidos"><br>
        <p id="nombre" style="color:#FF0000";></p>
        <input type="number" id="telefono" placeholder="Número de teléfono"><br>
        <p id="phone" style="color:#FF0000";></p>
        <input type="email" id="email" placeholder="Email"><br>
        <p id="wrongEmail" style="color:#FF0000";></p>
        <input type="textarea" id="descripcion" cols="10" rows="10"><br>
        <p id="textarea" style="color:#FF0000";></p>
        <input type="button" id="submit" value="Enviar">
        </form>
      </div>
      <div id="map" style="width:400px;height:400px">
    </div>
     `);
  });
