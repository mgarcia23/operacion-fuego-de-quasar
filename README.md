# Desafío postulación MercadoLibre
Operación Fuego de Quasar como desafío para ingresar a MercadoLibre.

Hola! Soy programador backend en .NET pero tomé el examen como un desafío para involucrarme con NodeJS (cada tanto tenemos que salirnos de nuestra zona de confort). Doy fe de que ha sido exigente!! y he aprendido más de lo que esperaba :)

## Tecnologías utilizadas
El proyecto contiene un servidor montado en [NodeJS](https://nodejs.org/) utilizando [ExpressJS](http://expressjs.com/) como framwork del lado del servidor. Tambien se utilizo [App Engine](https://cloud.google.com/appengine?hl=es) para tener la api montada en la nube y poder consumir de ella en todo momento.

## Requerimientos
Construir 3 endpoints:
- POST /api/v1/topsecret 
    Se envía una lista de satelites con infromación de su nombre, distancia y mensaje en el payload
- POST /api/v1/topsecret_split/:satellite_name
    Se envia información de un satelite con nombre 'satellite_name' indicando distancia y mensaje
- GET /api/v1/topsecret_split
    Se obtiene posición de la nave y mensaje de auxilio


## Instalación y Compilación Local
Para levantar un entorno local, hace falta tener instalado [nodejs](https://nodejs.org/) y [npmjs](https://www.npmjs.com/).

Clonar el repositorio, y dentro de la carpeta raíz, instalar las dependencias del archivo `package.json`:

    $ sudo npm install

Iniciar el servidor:

    $ npm start

## App Engine
Para poder consumir de esta api en App Engine, la URL es https://balmy-sanctuary-304401.df.r.appspot.com

## Recursos
En el repositorio, dentro de la carpeta docs, se encuentran los siguientes recursos:
- "Operacion Fuego de Quasar BE.pdf" donde está la consigna del ejercicio.
- "operacion-fuego-de-quasar.postman_collection.json" para poder importar la colección en postman y probar los endpoint tanto localmente como los expuesto desde App Engine.