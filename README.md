# Desafío postulación MercadoLibre
Operación Fuego de Quasar como desafío para ingresar a MercadoLibre.

Autor: Mariano García

Hola! Soy programador backend en .NET pero tomé el examen como un desafío para involucrarme con NodeJS (cada tanto tenemos que salirnos de nuestra zona de confort). Doy fe de que ha sido exigente!! y he aprendido más de lo que esperaba :)

## Tecnologías utilizadas
El proyecto contiene un servidor montado en [NodeJS](https://nodejs.org/) utilizando [ExpressJS](http://expressjs.com/) como framwork del lado del servidor. Tambien se utilizo [App Engine](https://cloud.google.com/appengine?hl=es) para tener la api montada en la nube y poder consumir de ella en todo momento.

## Instalación y Compilación Local
Para levantar un entorno local, hace falta tener instalado [nodejs](https://nodejs.org/) y [npmjs](https://www.npmjs.com/).

Clonar el repositorio, y dentro de la carpeta raíz, instalar las dependencias del archivo `package.json`:

    $ sudo npm install

Iniciar el servidor:

    $ npm start

## App Engine
La API se encuentra desplegada en Server NodeJS de App Engine de la plataforma Google Cloud
Uri Base: https://balmy-sanctuary-304401.df.r.appspot.com

### Servicios

#### POST /api/v1/topsecret
  - https://balmy-sanctuary-304401.df.r.appspot.com/api/v1/topsecret
###### Objetivo
Procesa una lista de satelites informando su distancia y un mensaje.
Devuelve:  
-   HTTP Status 200 si puede devolver posición de la nave y mensaje de auxilio
-   HTTP Status 404 si no puede devolver posición de la nave y/o mensaje de auxilio
###### Request Body
```
{
    "satellites": [
        {
            "name": "kenobi",
            "distance": 100.0,
            "message": ["este","","","mensaje",""]
        },
        {
            "name": "skywalker",
            "distance": 115.5,
            "message": ["","es","","","secreto"]
        },
        {
            "name": "sato",
            "distance": 142.7,
            "message": ["este","","un","",""]
        }
    ]
}
```
###### Response Body
- HTTP Status 200
```
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
- HTTP Status 404
```
{}
```

#### POST /api/v1/topsecret_split/:satellite_name
  - https://balmy-sanctuary-304401.df.r.appspot.com/api/v1/topsecret_split/:satellite_name
###### Objetivo
Procesa un satelite informando su distancia y un mensaje.
Devuelve:  
-   HTTP Status 200 si puede devolver posición de la nave y mensaje de auxilio
-   HTTP Status 404 si no puede devolver posición de la nave y/o mensaje de auxilio
###### Request Body
```
{
"distance":200.0,
"message":["este","","","mensaje",""]
}
```
###### Response Body
- HTTP Status 200
```
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
- HTTP Status 404
```
{}
```

#### GET /api/v1/topsecret_split
  - https://balmy-sanctuary-304401.df.r.appspot.com/api/v1/topsecret_split
###### Objetivo
Retorna posición de la nave y mensaje de auxilio
Devuelve:  
-   HTTP Status 200 con la posición de la nave y mensaje de auxilio
-   HTTP Status 200 con un mensaje indicando que tiene insuficiente información para indicar posición de la nave y/o mensaje de auxilio
###### Response Body
- HTTP Status 200
```
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
- HTTP Status 200
```
{
    "No hay información suficiente para indicar posición y mensaje de auxilio"
}
```

## Recursos
En el repositorio, dentro de la carpeta docs, se encuentran los siguientes recursos:
- [Operacion Fuego de Quasar BE.pdf](https://github.com/mgarcia23/operacion-fuego-de-quasar/blob/master/docs/Operacion%20Fuego%20de%20Quasar%20BE.pdf) donde está la consigna del ejercicio.
- [operacion-fuego-de-quasar.postman_collection.json](https://github.com/mgarcia23/operacion-fuego-de-quasar/blob/master/docs/operacion-fuego-de-quasar.postman_collection.json) para poder importar la colección en postman y probar los endpoint tanto localmente como los expuesto desde App Engine.