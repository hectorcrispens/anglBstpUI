# Collapse

## Ilustración

![collapse](Images/collapse.png)

## Estructura de cajas

![cajas](Images/cajas_collapse.svg)

## Template de angular

El template de angular esta construido por un `div` el cual tiene una animación. En la variable value, recibe el state es decir si debe ser `vshow`, `vhide`, `hshow` u `hhide`, decir que recibe la información de en que estado debe estar como tambien del tipo de collapsable que es. El timer es el tiempo en segundos que dura el collapse para mostrarse u ocultarse. El resto de opciones es el `max-height` y `max-width` respectivamente indicando cuanto es el valor máximo que puede crecer el collapsable.

```html
<div [@triggerCollapse]="{value:stateClps, params:{timer: time, maxvh: maxvh, maxvw:maxvw}}" class="acollapse">
   <ng-content></ng-content>
</div>
```

## clases

No admite el ingreso de clases

## Uso del collapse

Colocamos un botón, cuyo evento click llama a la función `tgle()` de la variable `collapse`

```html
<ngb-button [clss]="['btn', 'btn-primary']" (clck)="collapse.tgle()">Toggle height collapse</ngb-button>
```

Colocamos el componente **collapse** y definimos la dirección, el max-vh y el time, aunque estos valores son opcionales.

```html
<ngb-collapse #collapse [drtn]="'vrtl'" [max-vh]="20" [time]="0.5" (stte)="fresh1($event)">
    <div class="col-6">
       <ngb-card style="overflow: hidden;">
            <div class="card card-body" style="width: 300px; word-wrap: break-word;">
                      This is some placeholder content for a horizontal collapse. 
                        It's hidden by default and shown when triggered. 
             </div>
        </ngb-card>
     </div>
 </ngb-collapse>
```



## Inputs

El collapse admite cuatro inputs, el de dirección ya que puede ser horizontal o vertical. El valor máximo que puede crecer el collapse en valores de viewport y el tiempo que demora la animación en unidades de segundos.

```jsx
<!-- direction vrtl | hrzn -->
[drtn]="'vrtl'" 

<!-- valor del viewHeight -->
[max-vh]="20"

<!-- valor del viewWidth -->
[max-vw]="20"

<!-- tiempo en segundos de la animación -->
[time]="0.5"
```



## Outputs

El único output que tiene es el de `stte` el cual informa el estado 

```jsx
(stte)="fresh1($event)"
```



## Métodos

El collapse, tiene un único método es el de toggle que permite cambiar el estado entre show e hide.

- `tgle()` Cambia el estado entre show e hidden.
