![ang](https://raw.githubusercontent.com/hectorcrispens/anglBstpUI/bd64e65a6964e585ea661fb0d14dc20c32ea5432/imag/header.svg)

# anglBstpUI v0.10.0

Libreria de Angular con componentes de bootstrap 5

[![](https://img.shields.io/badge/angular-12.2.0-red?style=flat-square&logo=angular)](https://angular.io/) [![](https://img.shields.io/badge/bootstrap-5.1.0-green?style=flat-square&logo=bootstrap)](https://getbootstrap.com/) ![](https://img.shields.io/badge/npm-6.14.13-cb3837?style=flat-square&logo=npm)



## Contributors

[![hector](https://raw.githubusercontent.com/hectorcrispens/anglBstpUI/bd64e65a6964e585ea661fb0d14dc20c32ea5432/imag/avatar-hector.svg)](https://www.linkedin.com/in/hector-orlando-25124a18a/)  [![sergio](https://raw.githubusercontent.com/hectorcrispens/anglBstpUI/bd64e65a6964e585ea661fb0d14dc20c32ea5432/imag/avatar-sergio.svg)](https://www.linkedin.com/in/sergio-ridaura/)



Time version 2021.12.10

Semantic version v0.10.0 

Documento léeme



## ¡Aclaración importante!

> De momento este proyecto se encuentra aún en vías de desarrollo, aunque ya este disponible para la descarga en **NPM** su desarrollo es parcial, no obstante es posible seguir los avances a través de las publicaciones incrementales sobre el proyecto.
>

------



## Tabla de contenido
- [anglBstpUI v0.10.0](#anglbstpui-v0100)
  - [Contributors](#contributors)
  - [¡Aclaración importante!](#aclaración-importante)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Ultimos avances del proyecto](#ultimos-avances-del-proyecto)
  - [Descripción](#descripción)
  - [Guía de instalación](#guía-de-instalación)
      - [Creación de un proyecto de Angular](#creación-de-un-proyecto-de-angular)
      - [Instalación de la librería](#instalación-de-la-librería)
  - [Guía de uso](#guía-de-uso)

## Ultimos avances del proyecto

  - `10-12-2021` se agregó el componente badge
  - `04-12-2021` se agregó el componente alert
  - `27-11-2021` se agregó el componente accordion
  - `20-10-2021` se agregó el componente offcanvas
  - `05-10-2021` se agregó el componente collapse
  - `27-09-2021` se agregó el componente navbar
  - `15-09-2021` se agregó el componente tab
  - `04-09-2021` se agregó el componente modal
  - `03-09-2021` se agregó el componente card
  - `19-08-2021` se agregó el componente button


------



## Descripción

Esta es una librería de **Angular**, creada a partir de la versión 12.2.0. Esta librería esta construida a partir del `css` de **Bootstrap** en su versión 5.1.0 y se ha separado el mismo en distintos componentes. Por tanto ahora los componentes de boostrap han sido separados en componentes de angular con los cuales es mas facil trabajar. ¿Que se intenta decir con esto?, que ahora puedo usar un selector de angular por ejemplo para un card o un modal, y ya dicho componente tendrá consigo todo el css necesario para tener el aspecto que tiene en **Bootstrap**.

La idea es que para crear aplicaciones medianamente rápidas, no haya que andar instalando **Bootstrap** por un lado y por otro creando los componentes, además que al instalar solo bootstrap no se tiene control sobre los eventos y demás desde angular ya que todo el `css` y el `javascript` quedan por fuera de nuestros componentes.

Otra de las características de esta librería, es que propone ser **100%** auto-documentada, con lo cual al instalarla podrá tener consigo toda la documentación suficiente para su uso.

------



## Guía de instalación

Para instalar esta librería es necesario tener un proyecto de angular el cual hará uso de la misma.

#### Creación de un proyecto de Angular

Para la creación de un proyecto de **Angular** es necesario tener instalados, [Node](https://nodejs.org/es/) el cual incluye el paquete de [npm](https://www.npmjs.com/) que es el manejador de paquetes.

Una vez instalados estos programas es necesario instalar [angular/cli](https://angular.io/cli) que es el conjunto de herramientas de linea de comando de angular, la misma es muy util a la hora de trabajar con **angular**. Nos permite desde crear proyectos, agregar componentes, instalar paquetes, etc.

Para instalar `angular/cli` abrir una terminal/consola y ejecutar el siguiente comando:

```bash
npm install -g @angular/cli
```

A partir de entonces tendremos disponible el comando `ng`

Para crear un primer proyecto, compilarlo y levantar un servidor de testing ejecutar los siguientes comandos:

```bash
ng new nombre-proyecto
cd nombre-proyecto
ng serve
```

Con esto ya puede visualizar, en este caso una pantalla de presentación de angular en su navegador web en la dirección [http://localhost:4200/ ](http://localhost:4200/ ).

Otra forma de trabajar con angular, si no desea instalar node y npm en su computadora local, es hacerlo a través de contenedores de docker, que permiten crear maquinas virtuales muy pequeñas donde estan encapsuladas todas las dependencias necesarias para trabajar, en este caso puede descargar de **docker hub** un contenedor con node y npm incluidos. Si desea saber más puede consultar este [enlace](https://hub.docker.com/r/hectorcrispens/angl-cli) donde encontrará un contenedor ideal para dicho propósito.



#### Instalación de la librería

La idea es que esta librería se autodocumente por si misma, de manera que su uso sea de la mayor sencillez posible. Igualmente puede consultar documentación adicional en el repositorio del proyecto haciendo click [aqui](https://github.com/hectorcrispens/anglBstpUI).

Lo primero para utilizar la librería es descargarla de **npm**. para ello ejecutar el siguiente comando:

```bash
npm i angl-bstp-ui
```

Esto descargará la librería compilada y la colocará dentro de la carpeta `node_modules`, lo siguiente es importar la librería en el `app.module.ts` .

```bash
import { AnglBstpUIModule } from 'angl-bstp-ui';

imports: [
   AnglBstpUIModule
 ]
```

Con esto la librería ya está lista para ser usada en el proyecto principal. Sin embargo no todo el código `css`de **bootstrap** está encapsulado dentro de componentes, por ejemplo aquellas clases para los contenedores o la creación de grillas, por ejemplo la clase `.container-fluid` `col-md-6`, etc.

Para incorporar estos estilos globales que son transversales a todos los componentes es necesario incorporar el archivo `styles.css` dentro del archivo `angular.json`en la parte de estilos de nuestro proyecto principal.

La linea para agregar los estilos sería la siguiente:

```json
"architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.css",
              "node_modules/angl-bstp-ui/src/assets/style/styles.css"
            ],
            "scripts": [
            ]
          }
        }
}
```

Ahora si ya estaría instalada la librería y lista para ser utilizada en nuestro proyecto.

------



## Guía de uso

Para usar la librería es fácil, solo basta utilizar el siguiente selector en el `app.component.html`:

```html
<ngb-anglBstpUI></ngb-anglBstpUI>
```

Con ese es suficiente, a continuación verá en la pantalla del navegador una documentación detallada sobre el uso de la librería y de los distintos componentes. Es decir que dentro de la misma tiene toda la documentación necesaria para su utilización.

