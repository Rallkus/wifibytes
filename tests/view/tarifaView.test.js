import {tarifa} from '../../src/view/tarifaView';

const rrss = {facebook:"paco", twitter:"perolo"};
const $ = require('jquery');

const tarifa5={
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
          "subtarifa_id": 5,
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
};
const tarifa4={
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
          "subtarifa_id": 4,
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
          "tipo_tarifa": 4,
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
};
const tarifa3={
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
          "subtarifa_id": 3,
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
          "tipo_tarifa": 3,
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
};
const tarifa2={
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
          "subtarifa_id": 2,
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
          "tipo_tarifa": 2,
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
};
const tarifa1={
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
          "tipo_tarifa": 1,
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
};

test('tarifa working template working', () => {
  expect(tarifa(tarifa1)).toMatch(/Tarifa móvil/);
    expect(tarifa(tarifa1)).toMatch(/12/);
    expect(tarifa(tarifa1)).toMatch(/0/);
  });
  test('tarifa working template working', () => {
    expect(tarifa(tarifa2)).toMatch(/Tarifa de fijo/);
  });
  test('tarifa working template working', () => {
    expect(tarifa(tarifa3)).toMatch(/Tarifa de fibra óptica/);
    expect(tarifa(tarifa3)).toMatch(/47/);
    expect(tarifa(tarifa3)).toMatch(/megas de fibra óptica de bajada/);
  });
  test('tarifa working template working', () => {
    expect(tarifa(tarifa4)).toMatch(/Tarifa de wifi/);
    expect(tarifa(tarifa4)).toMatch(/47/);
    expect(tarifa(tarifa4)).toMatch(/megas de bajada con wifi/);
  });
  test('tarifa working template working', () => {
    expect(tarifa(tarifa5)).toMatch(/Tarifa de televisión/);
    expect(tarifa(tarifa5)).toMatch(/47/);
  });