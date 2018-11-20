import tarifasCtrl from '../../../../src/modules/tarifas/controller/tarifasCtrl';
const $ = require('jquery');
let tarifas = {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "codtarifa": 1,
            "nombretarifa": "Prueba",
            "slug": "prueba",
            "pretitulo": "La tarifa para los recién llegados",
            "logo": "http://localhost:8000/media/Logo/icon-egg_FRpw391.png",
            "precio": 15.95,
            "activo": true,
            "destacado": true,
            "color": {
                "id": 1,
                "titulo": "Blanco",
                "hexadecimal": "#FFFFFF"
            },
            "subtarifas": []
        },
        {
            "codtarifa": 2,
            "nombretarifa": "Pollito",
            "slug": "pollito",
            "pretitulo": "Para los recién salidos del cascarón",
            "logo": "http://localhost:8000/media/Logo/chick_8qOw42B.png",
            "precio": 10.99,
            "activo": true,
            "destacado": false,
            "color": {
                "id": 2,
                "titulo": "Amarillo claro",
                "hexadecimal": "#FFFFE0"
            },
            "subtarifas": []
        },
        {
            "codtarifa": 3,
            "nombretarifa": "Gallina",
            "slug": "gallina",
            "pretitulo": "Para quien busca a su gallo",
            "logo": "http://localhost:8000/media/Logo/icon-chicken.png",
            "precio": 19.99,
            "activo": true,
            "destacado": true,
            "color": {
                "id": 3,
                "titulo": "Naranja",
                "hexadecimal": "\t#FFA500"
            },
            "subtarifas": [
                {
                    "subtarifa_id": 1,
                    "subtarifa_datos_internet": 0.0,
                    "subtarifa_cent_minuto": 12.0,
                    "subtarifa_est_llamada": 3.0,
                    "subtarifa_precio_sms": 0.05,
                    "subtarifa_minutos_gratis": 100,
                    "subtarifa_minutos_ilimitados": true,
                    "subtarifa_velocidad_conexion_subida": 47.0,
                    "subtarifa_velocidad_conexion_bajada": 47.0,
                    "subtarifa_num_canales": 47,
                    "subtarifa_siglas_omv": "Gallina",
                    "subtarifa_omv": {
                        "codigo": 1,
                        "nombre": "Movistar",
                        "descripcion": "dasasddas",
                        "activo": true
                    },
                    "tipo_tarifa": 5,
                    "subtarifa_tarifa": {
                        "codtarifa": 3,
                        "nombretarifa": "Gallina",
                        "slug": "gallina",
                        "pretitulo": "Para quien busca a su gallo",
                        "pretitulo_va": "",
                        "logo": "media/Logo/icon-chicken.png",
                        "precio": 19.99,
                        "activo": true,
                        "destacado": true,
                        "created_at": 1541525472,
                        "updated_at": 1541689705,
                        "color": 3
                    }
                }
            ]
        }
    ]
};

beforeAll(()=>{
      // Set up our document body
      document.body.innerHTML =`<!DOCTYPE html>
      <html lang="es">
        <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <title>title</title>
          <script type="text/javascript" src="main.js"></script>    
          <script> </script>
        </head>
        <body>
          <section>
              <div class="flex-container">
                <div id="page"></div>            
              </div>     
          </section>
        </body>
        
      </html>`;
})

test('We check if CatalogController is called', () => {
    tarifasCtrl.render(tarifas);
    expect($('#page').children.length).toBeGreaterThan(1);    

});