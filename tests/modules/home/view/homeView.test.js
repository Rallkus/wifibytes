import {template, textTemplate, carouselTemplate} from '../../../../src/modules/home/view/homeView';

const textos=
  {
      "pk": 1,
      "titulo": "Sobre nosotros",
      "subtitulo": " ",
      "caja_izquierda_titulo": "Por qué Sergio Huertas?",
      "caja_izquierda_texto": "<p>Hemos sido clientes durante mucho tiempo de otras empresas y sabemos justamente lo que quieren nuestros clientes, proporcionamos los mejores servicios y al mejor precio, y adem&aacute;s la mejor atenci&oacute;n al cliente</p>",
      "caja_derecha_titulo": "Quiénes somos?",
      "caja_derecha_texto": "<p>Somos una empresa de reciente creaci&oacute;n y con mucha ambici&oacute;n. Estamos en el sector de la telefon&iacute;a m&oacute;vil y venimos a comernos el mundo, te apuntas? Tenemos todo tipo de productos telef&oacute;nicos y tarifas al mejor precio!</p>",
      "activo": true,
      "idioma": 1,
      "lang": "ES"
  }
;
const slider = [
      {
          "key": "jumbotron_slider_1",
          "content": "<p>Juntos por el empleo</p>",
          "image": "http://localhost:8000/media/info_empresa_image/slider1.jpeg",
          "lang": "ES"
      },
      {
          "key": "jumbotron_slider_2",
          "content": "<p>Comprometidos con el futuro</p>",
          "image": "http://localhost:8000/media/info_empresa_image/slider2.jpeg",
          "lang": "ES"
      }]
  
;

const $ = require('jquery');

test('home template working', () => {
    expect(template()).toMatch(/slider/);
  });

  test('home textTemplate working', () => {
    expect(textTemplate(textos)).toMatch(/Por qué Sergio Huertas?/);
  });

  test('home carouselTemplate working', () => {
    expect(carouselTemplate(slider)).toMatch(/Juntos por el empleo/);
  });