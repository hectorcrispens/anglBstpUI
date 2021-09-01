# anglBstpUI

Version 21.09.01
 Documento léeme

------

Copyright (C) 2021.

- Sergio Ridaura, sergrida
   https://sergioridaura.com - [info@sergioridaura.com](mailto:info@sergioridaura.com)
- Héctor Orlando, hcrispens
   [hector.or.cr@gmail.com](mailto:hector.or.cr@gmail.com)



## ¡Aclaración importante!

> De momento este proyecto se encuentra aún en vías de desarrollo, aunque ya este disponible para la descarga en **NPM** su desarrollo es parcial, no obstante es posible seguir los avances a través de las publicaciones incrementales sobre el proyecto.
>

------



## Tabla de contenido

- [anglBstpUI](#anglbstpui)
  - [¡Aclaración importante!](#aclaración-importante)
  - [Últimos avances](#últimos-avances)
  - [Descripción](#descripción)
  - [Guía de instalación](#guía-de-instalación)
      - [Creación de un proyecto de Angular](#creación-de-un-proyecto-de-angular)
      - [Instalación de la librería](#instalación-de-la-librería)
  - [Guía de uso](#guía-de-uso)



## Últimos avances

- Componente button
- Componente Card

------



## Descripción

Esta es una librería de **Angular**, creada a partir de la versión 12.2.0. Esta librería esta construida a partir del `css` de **Bootstrap** en su versión 5.1.0 y se ha separado el mismo en distintos componentes. Por tanto ahora los componentes de boostrap han sido separados en componentes de angular con los cuales es mas facil trabajar. ¿Que se intenta decir con esto?, que ahora puedo usar un selector de angular por ejemplo para un card o un modal, y ya dicho componente tendrá consigo todo el css necesario para tener el aspecto que tiene en **Bootstrap**.

La idea es que para crear aplicaciones medianamente rapidas, no haya que andar instalando **Bootstrap** por un lado y por otro creando los componentes, ademas que al instalar solo bootstrap no se tiene control sobre los eventos y demás desde angular ya que todo el `css` y el `javascript` quedan por fuera de nuestros componentes.

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
          ...
          "options": {
           ...
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