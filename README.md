![ang](imag/header.svg)

# anglBstpUI
Libreria de Angular con componentes de bootstrap 5

[![](https://img.shields.io/badge/angular-12.2.0-red?style=flat-square&logo=angular)](https://angular.io/) [![](https://img.shields.io/badge/bootstrap-5.1.0-green?style=flat-square&logo=bootstrap)](https://getbootstrap.com/) [![](https://img.shields.io/badge/npm-6.14.13-cb3837?style=flat-square&logo=npm)](https://nodejs.org/en/about/releases/)



## Contributors

[![hector](imag/avatar-hector.svg)](https://www.linkedin.com/in/hector-orlando-25124a18a/)  [![sergio](imag/avatar-sergio.svg)](https://www.linkedin.com/in/sergio-ridaura/)



Versión 01.08.2021

Documento léeme



## ¡Aclaración importante!

> De momento este proyecto se encuentra aún en vías de desarrollo, aunque ya este disponible para la descarga en **NPM** no es posible utilizar esta librería
>
> Al momento que esta leyenda desaparezca, la librería estara disponible para su uso, como también un documento de como implementarla. 

## ¡Últimas novedades!

> De momento este proyecto se encuentra aún en vías de desarrollo, aunque ya este disponible para la descarga en **NPM** no es posible utilizar esta librería
>
> Al momento que esta leyenda desaparezca, la librería estara disponible para su uso, como también un documento de como implementarla. 



## Descripción

Este proyecto tiene como proposito la construcción de una librería de **Angular** cuya finalidad es la de construir una serie de componentes que faciliten el desarrollo visual de aplicaciones basados en las hojas de estilo de **Boostrap**.

Esta es una librería creada con **Angular** v12.2.0, la misma incluye el documento de hoja de estilos de  **Boostrap** v5.1.0. Más especificamente el documento *boostrap.min.css*, el cual ha sido parseado y separado en diferentes componentes para que puedan ser utilizados estos estilos en proyectos de angular.

En cuanto al **javascript** no fue posible su reutilización dado el paradigma de desarrollo del proyecto **Boostrap**.

##  Guia de instalación 

Este proyecto esta disponible para su instalación en, puede ser descargado siguiendo las instrucciónes de instalación en el siguiente [enlace](https://www.npmjs.com/package/angl-bstp-ui).

Sin embargo si desea trabajar con el proyecto sin compilar, es posible clonar este proyecto y trabajar directamente sobre los componentes.

A continuación se muestra una guía de instalación desde github, teniendo presente que ya cuenta con una aplicación de angular creada con `ng new <name>`.

#### Crear la carpeta projects

El primer paso es crear una carpeta llamada *projects* en la raiz del proyecto. Debería quedar la siguiente estructura.

```
├── node_modules
├── projects
├── src
├── angular.json
├── karma.conf.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```



#### Clonar el proyecto

Ingresar al directorio *projects* y clonar el proyecto ahi dentro.

```bash
cd projects
git clone https://github.com/hectorcrispens/anglBstpUI.git
```



#### Agregar el proyecto al angular.json

Con esto ya está disponible la libreria para ser importada desde el directorio *projects*, lo siguiente es importar el proyecto en el `angular.json`.

```json
"projects":{
    "BootUI": {
      "projectType": "library",
      "root": "projects/angl-bstp-ui",
      "sourceRoot": "projects/angl-bstp-ui/src",
      "prefix": "btUI",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/angl-bstp-ui/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/angl-bstp-ui/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/angl-bstp-ui/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/angl-bstp-ui/src/test.ts",
            "tsConfig": "projects/angl-bstp-ui/tsconfig.spec.json",
            "karmaConfig": "projects/angl-bstp-ui/karma.conf.js"
          }
        }
      }
    }
}
```

También se requiere agregar un archivo de estilos para  aquellos componentes de **Bootstrap** que no tienen un componente específico de **Angular**, como por ejemplo el sistema de grillas.

Para ello en el archivo `angular.json` dentro del proyecto principal y en la parte de architect/ build/styles se debe agregar el mismo.

```json
"projects": {
    "angl": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
              ...          
            "styles": [
              "src/styles.css",
              "projects/angl-bstp-ui/styles.css"
            ]
          }
        }
      }
    }
}
```



#### Instalar ng-packagr

Es importante tambien tener instalado el paquete de node `ng-packagr`.

```bash
npm install -D ng-packagr
```

la opción `-D` le indica a npm que ng-package se instalará como una dependencia de desarrollo (lo cual esta bien) y no como una dependencia de producción.



#### app.module.ts

El último paso para utilizar la libreria es importar `AnglBstpUIModule` en el `AppModule` desde la `public-api`. Para ello en el **app.module.json**:

```tsx
import { AnglBstpUIModule } from 'projects/angl-bstp-ui/src/public-api';
...
imports: [
    AnglBstpUIModule
  ],
```

Con esto ya estaría diponible para ser utlizada sin compilar desde **github**.



## Modo de uso

#### Button

```html
<ngb-button [class]="['btn', 'btn-success']" (clickEvent)="sendToConsole($event)">hola mundo</ngb-button>
```



```javascript

  }
```





## Licencia

Copyright (C) 2021.

- Sergio Ridaura,
  - [![linkedin](https://img.shields.io/badge/LinkedIn--0a66c2?style=social&logo=linkedin)](https://www.linkedin.com/in/sergio-ridaura/) [![GitHub](https://img.shields.io/badge/GitHub--0a66c2?style=social&logo=GitHub)](https://github.com/sergrida) [![Correo](https://img.shields.io/badge/Info-info@sergioridaura.com-0a66c2?style=social&logo=Mail.Ru)](mailto:info@sergioridaura.com) [![Site](https://img.shields.io/badge/Site-https://sergioridaura.com-ff7139?style=social&logo=FirefoxBrowser)](https://sergioridaura.com/)
- Héctor Orlando,
  - [![linkedin](https://img.shields.io/badge/LinkedIn--0a66c2?style=social&logo=linkedin)](https://www.linkedin.com/in/hector-orlando-25124a18a/) [![linkedin](https://img.shields.io/badge/GitHub--0a66c2?style=social&logo=GitHub)](https://github.com/hectorcrispens) [![linkedin](https://img.shields.io/badge/Gmail--0a66c2?style=social&logo=Gmail)](mailto:hector.or.cr@gmail.com)

### GNU General Public License

Este programa es software gratuito: puedes redistribuirlo y/o modificar bajo los términos de la Licencia Pública General GNU tal como se publicó por la Free Software Foundation, ya sea la versión 3 de la Licencia, o cualquier versión posterior.

Este programa se distribuye con la esperanza de que sea de utilidad, pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Ver el Licencia pública general GNU para más detalles.

Debería haber recibido una copia de la Licencia Pública General GNU junto con este programa, en [LICENSE.md](http://license.md/) o https://www.gnu.org/licenses/gpl-3.0.html.en.
