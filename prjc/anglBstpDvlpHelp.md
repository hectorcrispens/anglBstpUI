# Documento para desarrolladores

# Library



En este documento se pretende abarcar todos los pasos para crear una librería y publicarla en **npm**, la librería que vamos a crear en este caso se llama **BootUI**.

Es una libreria que contendra un conjunto de componentes que a su vez usaran el framework de css **Bootstrap** para el diseño de interfaces de aplicaciones web.

Lo primero es crear la libreria con el prefijo para los selectores, esto lo hacemos en la raiz de nuestro proyecto angular.

```bash
$ ng generate library BootUI --prefix=btUI
```

Este comando hace varios cambios, por un lado crea una carpeta `projects/boot-ui` en la cual va a estar nuestro proyecto de libreria y agrega cambios en los siguientes archivos:



angular.json

```json
"BootUI": {
      "projectType": "library",
      "root": "projects/boot-ui",
      "sourceRoot": "projects/boot-ui/src",
      "prefix": "btUI",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/boot-ui/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/boot-ui/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/boot-ui/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/boot-ui/src/test.ts",
            "tsConfig": "projects/boot-ui/tsconfig.spec.json",
            "karmaConfig": "projects/boot-ui/karma.conf.js"
          }
        }
      }
```



package.json

```json
"ng-packagr": "^12.1.0",
```



tsconfig.json

```json
"paths": {
      "boot-ui": [
        "dist/boot-ui/boot-ui",
        "dist/boot-ui"
      ]
    },
```



## Como trabajar

Dentro de la carpeta `projects/boot-ui/src/lib` hay un *componente*, un *servicio* y un *modulo*.  Sobre ellos es posible trabajar, crear componentes.

Dentro de la carpeta `angular.json` de la raiz, es decir en `/angular.json`  tenemos dos proyectos ahora, el proyecto principal y nuestro proyecto de librería, en este caso `BootUI`, con ese nombre vamos a compilar la aplicación.

Para ello utilizaremos el siguiente comando:

```bash
$ npm run build BootUI
```

Esto genera una carpeta `/dist/boot-ui` en la que adentro se encuentra el compilado de la libreria. Esta carpeta es la que posteriormente subiremos a **npm**.

Para usar esta libreria se debe importar el modulo en el `app.module.ts` en la parte de imports.

```typescript
  import { BootUIModule } from 'boot-ui';
  imports: [
    BrowserModule,
    BootUIModule
  ]
```

En el caso que querramos trabajar con el `projects/boot-ui` y no con el que hemos compilado en dist, entonces en el `app.module.ts` vamos a importar el modulo pero desde `projects`.

```tsx
 import { BootUIModule } from 'projects/boot-ui/src/public-api';

```

Ahora solo basta con usar los selectores en nuestra aplicación para incorporar los componentes de la libreria en nuestro proyecto raiz.

por ejemplo en el `app.component.html`  y en el `app.component.ts` de nuestro proyecto raiz:

```html
<!-- Agregamos el selector del componente -->
<btUI-BootUI></btUI-BootUI>
```



## Compilado de la aplicación

Para compilar la aplicación, se debe utilizar el comando `npḿ run build` y el nombre del proyecto a compilar, en el caso de que no se especifique ningún nombre el proyecto que se compilará será el **proyecto principal**.

Tambien es importante destacar que ahora vamos a compilar para **producción**:

```bash
$ npm run build BootUI --prod
```



## Publicación en NPM

Lo primero que se debe verificar es que no haya otra librería con el mismo nombre ya que **npm** tiene una restricción de nombres. Eso es sencillo, solo es necesario utilizar el nombre de la libreria, *que figura en la parte superior del package.json de la misma*.

#### Solucionar problema de motor Ivy

En algunos casos al publicar en **npm** suele dar error de que hay un problema con el motor de render **Ivy**. Para ello es necesario desahilitarlo en el archivo `tsconfig.lib.json` en la sección de `compilerOptions`.

```json
"compilerOptions": {
	"enableIvy": false,
	}
```

Tambien existe `tsconfig.lib.prod.json`, **¿se debería utilizar este si solo se desea deshabilitar en producción?**.



#### npm packages con dependencias

Cuando se realiza el build, primero se lanza un alerta el cual luego deriva en un error. Este error tiene que  la dependencia `ng-packagr` la cual no permite publicar paquetes con dependencias.

El alerta que muestra es la siguiente

:warning:Distributing npm packages with 'dependencies' is not recommended.

`Dependency bootstrap must be explicitly allowed using the "allowedNonPeerDependencies" option.`

para resolver esta situación se debe modificar el archivo `ng-package.json` en la raiz de la libreria agregando la siguiente linea al json.

```json
"allowedNonPeerDependencies": ["bootstrap"],
```

*bootstrap es en este caso la dependencia, podria ser cualquier otra.*



#### Error not found registry

Ahora si nos ubicamos en la caprtea `/dist/boot-ui` y hacemos `npm publish`

```bash
/dist/boot-ui# npm publish
```

 obtenemos un error como el que figura a continuación:

Not Found - PUT https://registry.npmjs.org/boot-ui - Not found

Aca hay dos cosas a tener en cuenta, por un lado es importante iniciar una cuenta de **npm** local y por otro lado, es interesante completar con mas datos el `package.json`.

Es util consultar el siguiente [enlace](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) para obtener mas información acerca de como completar el `package.json`.



#### Completar metadatos de package

A continuación se listan algunos elementos importantes para agregar al archivo. además de **name** y de **version**

**description**

```json
"description":"libreria que incorpora bootstrap bajo el formato de componentes",
```



**keywords**

```json
"keywords": ["angular","bootstrap", "facil"]
```



**homepage**

```json
"homepage": "https://github.com/owner/project#readme"
```



**bugs**

```json
"bugs": { "url" : "https://github.com/owner/project/issues"
, "email" : "project@hostname.com"
}
```



**licence**

```json
"license" : "MIT"
```



**author**

```json
"contributors":[
{ "name" : "Barney Rubble"
, "email" : "b@rubble.com"
, "url" : "http://barnyrubble.tumblr.com/"
}]
```



#### Agregar cuenta de npm local

```bash
$ npm adduser
```

