# Button group

## Ilustración

![btngroup](Images/btngroup.png)

## Estructura de cajas

![cajasbtngroup](Images/cajas_btn_group.svg)

## Template de angular

El template de angular es un div con el contenido dentro, el cual cambia de aspecto según los input `type` y `clss`.

```html
<div [ngClass]="clss != undefined ? clase.concat(clss) : clase">
    <ng-content></ng-content>
</div>
```



## Clases

Las clases posibles que puede recibir el `btn-group` son varias, las principales son las clases `btn-group-lg` y `btn-group-sm`, sin embargo es posible personalizar su  

```jsx
<!-- types -->
mrgnType
pddgType

<!-- clases -->
btn-group-sm
btn-group-lg
```



## Uso del btn group

El `btn-group` es un contenedor en cuyo interior tiene una lista de `ngb-button`.

```html
<ngb-button-group [clss]="['me-4']" [type]="'btn-group'">
    <ngb-button [clss]="['btn', 'btn-primary']">Left</ngb-button>
    <ngb-button [clss]="['btn', 'btn-primary']">Middle</ngb-button>
    <ngb-button [clss]="['btn', 'btn-primary']">Right</ngb-button>
</ngb-button-group>
```



## Inputs

Tiene dos **input**, el de `clss`  que determina el tamaño de los botones, el margen o el padding. Por otro lado el **input** `type` determina si el `btn-group` va a ser de tipo `btn-group`,  `input-group`o `btn-group-vertical`.

```jsx
<!-- Clases -->
[clss]="[
	'mw-100'|'m-0'|'m-1'|'m-2'|'m-3'|'m-4'|'m-5'|'m-auto'|'mx-0'|'mx-1'|'mx-2'|'mx-3'|'mx-4'|'mx-5'|'mx-auto'|'my-0'|
	'my-1'|'my-2'|'my-3'|'my-4'|'my-5'|'my-auto'|'mt-0'|'mt-1'|'mt-2'|'mt-3'|'mt-4'|'mt-5'|'mt-auto'|'me-0'|'me-1'|'me-2'|
	'me-3'|'me-4'|'me-5'|'me-auto'|'mb-0'|'mb-1'|'mb-2'|'mb-3'|'mb-4'|'mb-5'|'mb-auto'|'ms-0'|'ms-1'|'ms-2'|'ms-3'|'ms-4'|
	'ms-5'|'ms-auto'|
    'p-0'|'p-1'|'p-2'|'p-3'|'p-4'|'p-5'|'px-0'|'px-1'|'px-2'|'px-3'|'px-4'|'px-5'|'py-0'|'py-1'|'py-2'|'py-3'|'py-4'|
    'py-5'|'pt-0'|'pt-1'|'pt-2'|'pt-3'|'pt-4'|'pt-5'|'pe-0'|'pe-1'|'pe-2'|'pe-3'|'pe-4'|'pe-5'|'pb-0'|'pb-1'|'pb-2'|
    'pb-3'|'pb-4'|'pb-5'|'ps-0'|'ps-1'|'ps-2'|'ps-3'|'ps-4'|'ps-5'|
    'btn-group-sm' | 'btn-group-lg']"

<!-- types -->
[type]="'btn-group'|'input-group'|'btn-group-vertical'"
```



## Outputs

El `ngb-btn-group` no contiene outputs.

## Métodos

El `ngb-btn-group` no contiene métodos públicos tampoco.
