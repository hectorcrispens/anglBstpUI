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



## Descripción

Este proyecto tiene como proposito la construcción de una librería de **Angular** cuya finalidad es la de construir una serie de componentes que faciliten el desarrollo visual de aplicaciones basados en las hojas de estilo de **Boostrap**.

Esta es una librería creada con **Angular** v12.2.0, la misma incluye el documento de hoja de estilos de  **Boostrap** v5.1.0. Más especificamente el documento *boostrap.min.css*, el cual ha sido parseado y separado en diferentes componentes para que puedan ser utilizados estos estilos en proyectos de angular.

En cuanto al **javascript** no fue posible su reutilización dado el paradigma de desarrollo del proyecto **Boostrap**.

 

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
