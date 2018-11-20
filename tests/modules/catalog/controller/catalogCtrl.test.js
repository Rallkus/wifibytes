import catalogCtrl from '../../../../src/modules/catalog/controller/catalogCtrl';
import {lang} from '../../../../src/utils/languages/language';
const $ = require('jquery');
let familias = {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "codfamilia": "tlf",
            "slug": "smartphones",
            "nombre": "Smartphones",
            "color": {
                "id": 1,
                "titulo": "Blanco",
                "hexadecimal": "#FFFFFF"
            },
            "icono": "http://localhost:8000/media/familia/icon-chicken.png",
            "pretitulo": "Lo último en Smartphones",
            "titulo": "Smartphones",
            "precio_cabecera": 175.0,
            "imagen_cabecera": "http://localhost:8000/media/familia/smartphones.PNG",
            "thumbnail": null,
            "texto_cabecera": "<p>bla bla bla</p>",
            "subtexto_cabecera": "<p><span style=\"color: #3d3d3c; font-family: 'Open Sans'; font-size: 16px;\">No olvides que todos nuestros terminales son libres y que no tienes permanencia al contratar nuestras tarifas.</span></p>"
        },
        {
            "codfamilia": "tab",
            "slug": "tablet",
            "nombre": "Tablet",
            "color": {
                "id": 1,
                "titulo": "Blanco",
                "hexadecimal": "#FFFFFF"
            },
            "icono": "http://localhost:8000/media/familia/icon-egg_FRpw391.png",
            "pretitulo": "Tablet",
            "titulo": "Tablet",
            "precio_cabecera": 150.0,
            "imagen_cabecera": "http://localhost:8000/media/familia/jerry_max_03_OButGC0.png",
            "thumbnail": null,
            "texto_cabecera": "<p>Tablet</p>",
            "subtexto_cabecera": "<p>Tablet</p>"
        }
    ]
};
let filtros = {
    "pantalla": [
        {
            "id": 1,
            "num_pantalla": 5.0
        },
        {
            "id": 2,
            "num_pantalla": 6.0
        }
    ],
    "procesador": [
        {
            "id": 1,
            "num_procesador": "Core-Quad"
        },
        {
            "id": 2,
            "num_procesador": "dddd"
        }
    ],
    "ram": [
        {
            "id": 1,
            "num_ram": "2"
        },
        {
            "id": 2,
            "num_ram": "4"
        }
    ],
    "marca": [
        {
            "id": 1,
            "Marca": "Samsung"
        },
        {
            "id": 2,
            "Marca": "Vodafone"
        }
    ],
    "camara": [
        {
            "id": 1,
            "num_camara": 8.0
        },
        {
            "id": 2,
            "num_camara": 16.0
        }
    ]
};
let articulo = {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "referencia": "e159c4e9-0e3e-473e-9f96-26441c5daf72",
            "templates": {
                "template3": {
                    "pretitulo": "",
                    "franja_1_texto": "",
                    "franja_1_fondo": null,
                    "caja_1_titulo": "",
                    "caja_1_texto": "",
                    "caja_2_titulo": "",
                    "caja_2_texto": "",
                    "franja_2_texto": "",
                    "franja_2_fondo": null,
                    "imagen1": null,
                    "imagen2": null,
                    "imagen3": null,
                    "imagen4": null,
                    "articulo": null,
                    "idioma": null
                },
                "template2": {
                    "pretitulo": "",
                    "caja_1_titulo": "",
                    "caja_1_texto": "",
                    "caja_2_titulo": "",
                    "caja_2_texto": "",
                    "caja_3_titulo": "",
                    "caja_3_texto": "",
                    "caja_4_titulo": "",
                    "caja_4_texto": "",
                    "imagen1": null,
                    "imagen2": null,
                    "imagen3": null,
                    "imagen4": null,
                    "imagen_fondo_cabecera": null,
                    "imagen_fondo_cuerpo": null,
                    "articulo": null,
                    "idioma": null
                },
                "template1": {
                    "pretitulo": "",
                    "caja_1_titulo": "",
                    "caja_1_texto": "",
                    "caja_2_titulo": "",
                    "caja_2_texto": "",
                    "caja_3_titulo": "",
                    "caja_3_texto": "",
                    "caja_4_titulo": "",
                    "caja_4_texto": "",
                    "imagen1": null,
                    "imagen2": null,
                    "imagen3": null,
                    "imagen_fondo_cabecera": null,
                    "imagen_fondo_cuerpo": null,
                    "articulo": null,
                    "idioma": null
                }
            },
            "descripcion": "dasasddas",
            "descripcion_breve": "SSS",
            "descripcion_larga": "<ul style=\"box-sizing: border-box; margin: 0px auto 10px; color: #3d3d3c; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">Pantalla de 5&Prime;&nbsp;</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">Procesador quadcore a 1,3GHz.</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">1GB de memoria RAM.</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">8GB de almacenamiento interno ampliables por tarjeta microSD.</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">Bater&iacute;a de 2.000mAh.</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">C&aacute;mara trasera de 5MP.</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">C&aacute;mara frontal de 2MP</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">Android 6.0.</li>\r\n</ul>",
            "imagen": "http://localhost:8000/media/pagina_tarifas/jerry_max_03.png",
            "thumbnail": "http://localhost:8000/media/pagina_tarifas/chick_8qOw42B.png",
            "slug": "dasasddas",
            "descripcion_va": "ddddddddddddddd",
            "pvp": 100.0,
            "stockfis": 3.0,
            "descripcion_breve_va": "AAA",
            "descripcion_larga_va": "<p style=\"box-sizing: border-box; margin: 0px 0px 10px; color: #3d3d3c; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">Pantalla de 5 \"</span></p>\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; color: #3d3d3c; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\">&nbsp;</p>\r\n<ul style=\"box-sizing: border-box; margin: 0px auto 10px; color: #3d3d3c; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">Processador quadcore a 1,3GHz.</span></p>\r\n</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">1GB de mem&ograve;ria RAM.</span></p>\r\n</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">8GB d'emmagatzematge intern ampliables per targeta microSD.</span></p>\r\n</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">Bateria de 2.000mAh.</span></p>\r\n</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">C&agrave;mera posterior de 5MP.</span></p>\r\n</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">C&agrave;mera frontal de 2MP</span></p>\r\n</li>\r\n<li style=\"box-sizing: border-box; margin: 0px auto; font-family: 'Open Sans'; font-size: 16px; line-height: 26px;\" dir=\"ltr\">\r\n<p style=\"box-sizing: border-box; margin: 0px 0px 10px; line-height: 26px;\" dir=\"ltr\"><span style=\"box-sizing: border-box; margin: 0px auto;\">Android 6.0.</span></p>\r\n</li>\r\n</ul>",
            "template": 1,
            "activo": true,
            "visible": true,
            "destacado": false,
            "secompra": true,
            "stockmax": 0.0,
            "codimpuesto": "IVA21%",
            "observaciones": "",
            "codbarras": "",
            "nostock": false,
            "controlstock": false,
            "tipocodbarras": null,
            "sevende": true,
            "venta_online": true,
            "stockmin": 0.0,
            "created_at": 1542651072,
            "updated_at": 1542713621,
            "codfamilia": "tlf",
            "marca": 1,
            "pantalla": 1,
            "procesador": 1,
            "ram": 1,
            "camara": 1
        }
    ]
};
beforeAll(()=>{
      // Set up our document body
  document.body.innerHTML =`
  <div id="categorias"></div>
  <div id="filtros"></div>
  <div id="productos"></div>`;
})

test('We check if CatalogController is called', () => {
    catalogCtrl.categorias(familias ,lang);
    expect($('#categorias').children.length).toBeGreaterThan(1);    

    catalogCtrl.filtros(filtros ,lang);
    expect($('#filtros').children.length).toBeGreaterThan(1);

    catalogCtrl.catalogo(articulo ,lang);
    expect($('#productos').children.length).toBeGreaterThan(1);
});