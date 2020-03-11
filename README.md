# Server Express

## Librerias

```
npm i express --save
npm i hbs --save
```
Ref:
https://handlebarsjs.com/

__dirname : Toma la ruta raiz donde esta desplegado el proyecto

## Para estar al pendiente de los cambios sobre archivos de otra extencion

```
nodemon server -e js,hbs, html, css
```

## Subir a Heroku
 - Instalar Heroku
 - Configurar comando "start": "node server.js" en package.json
 - Crear .gitignore e indicar que no suba los node_modules
 - Ejecutar los siguientes comandos:

 ```
 git init
 git status
 git add .
 git commit -m "Primer commit"
 heroku login
 heroku git:remote -a isaac-node-webpage
 git push heroku master
 heroku open
 ```
