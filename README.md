# Vue-aprendizaje

## Declarative Rendering
> Es la forma en que Vuejs nos propone la interacción con el DOM, principalmente con el Two Way Data Binding**

***Con este tendremos una Vista y un Estado***
[1.] **Estado: JavaScript -> se encarga de decirle a la vista como y cuando se debe compilar, y cual es el resultado de esta compilacion para su renderizado. (Render)**
[2.] **Vista: Html -> En medio estara el usuario interactuando con la web o app haciendo cambios y generando eventos. Entonces es la Vista quien le avisara al estado que hay cambios, y aqui nuevamente entra en acción el proceso del estado.**


## Expresiones y propiedades
> Con Vuejs dentro del Html se puede usar casi cualquier tipo de codigo JavaScript dentro de las expreciones encerradas entre ({{ expresion }})
```
$ 
$ <div id="app">
$       <h1 id="h1">{{ title }}</h1>
$       <p>{{ 1+1 }}</p>
$       <p> {{ true || false }} </p>
$       <p> {{ true ? true : false }} </p>
$       <p> {{ 'string'.toUpperCase() }} </p>
$       <p> {{ JSON.stringify({name: 'Dajan'}) }} </p>
$ </div>
```

## Directivas de Vuejs
> Las directivas de Vue se escriben casi siempre (v-nameDirective)

**v-bind**
> Esta directiva es especial que se aplica para atributos Html
```

$ <img v-bind:src="img">

```
#### Directivas de Flujo condicional
> Para mostrar o eliminar contenido Html dependiendo del resultado de una condición.

```

$ <span v-if="changePercent > 0">🤑</span>
$ <span v-else-if="changePercent < 0">🥲</span>
$ <span v-else>😀</span>

```
**v-if**
> Con esa directiva si no se cumple la condicion el elemento nisiquiera existira en el Html. Es decir remueve el elemento del DOM.

**v-show**
> Con esta directiva si aparece el elemento Html al inspeccionar la Web, es decir solo modifica el display a **none**. Pero este no cuenta con un v-hide, se debe definir el valor que queremos que tome.

```
$ <span v-show ="changePercent > 0">:D</span>
$ <span v-show="changePercent < 0">:(</span>
$ <span v-show="changePercent == 0">:¿</span>
```

**v-for**
> Esta directiva nos permite renderizar listas o arrays dentro de nuestro HTML.
***Cuando se utiliza [v-for] es recomendable la propiedad [key] que le permite a Vue identificar de manera univoca cada uno de los elementos. Lo cual permite que al momento de que se produzca un cambio o actualizacion, o reordenamiento en alguno de los elementos de la Lista Vue pueda seguir detectando cual es el elmento y no pierda el traqueo de ese elemento***

**Como es una propiedad se puede usar [v-bind] para indicarle el valor de la [key]**

```
$ <ul>
$    <!-- <li v-for="price in prices" key> -->
$    <li v-for="price in prices" v-bind:key="price">
$        {{ price }}
$    </li>
$ </ul>
```

**De igual forma podemos acceder al elemento indice que representa cada uno de los datos de la lista o array (valor, indice)**

```
$ <ul>
$   <li v-for="(price, index) in prices" v-bind:key="price">
$       {{index}} - {{ price }}
$   </li>
$ </ul>
```

**v-on**
> Esta directiva nos permite capturar cualquiera de los eventos validos del DOM generados por el usuario.

***Igual usa los dos punto y dentro el nombre del evento [v-on:click="nombre-funcion"]***

## Computed Properties
> Son las propiedades que se generan o calculan en tiempo real a partir de otras porpiedades, es decir que algún propiedad definida en data que al modificarse van a permitir generar un nuevo valor sobre otra propiedad. **son funciones que siempre devuelven un valor**

**Una propiedad computada dentro de una vista se usa como una propiedad de data**


## Watchers
> Los [Watchers] tienen un comportamiento similiar al de las propiedades computadas, pero en vez de ser funciones que devuelven un valor son **Son funciones que ejecutan un codigo**, es decir que a traves de un cambio o de la observacion de una variable puedo ejecutar determinado codigo o una funcion. **El nombre de la funcion debe corresponder a una propiedad de data**

## Two-Way Data Binding
> Es lo que permite la comunicacion entre los eventos que esta generando el usuario y alguna propiedad definida en [data].


## Web components
> Permite modularizar la aplicacion en pequeños trozos de codigo Html, Css y JavaScript, para poder tener un codigo mas legible y mas semantico. Cada componente que puede ser utilizado a lo largo del proyecto tiene todo lo que necesita, tiene su logica, su diseño y su estructura.

### Comunicación entre componentes
> Del componente padre al componente hijo es mediante propiedades **props**

> Del componente hijo al componente padre mediante eventos **this.$emit('')**

## Slots
> Es una api de distribucion de contenido, que permite que un componente padre le inyecte contenido HTML a un componente hijo.

**Se usa un tag para indicar donde el padre podra inyectar el contenido**

```
$ <slot></slot>
$ // Esto se coloca en el template del componente
$
$ // En el padre
$ <ejemplo> <!-- componente hijo invocado desde el padre -->
$   <p> Esto es un texto del padre al hijo </p>
$ </ejemplo>
```

***Es posible que se requiera agrgar mas de un slot a un componente por lo que se deben utilizar los [name-slot]***

> Cabe destacar que para utilizar los name slot se deben utilizar con el tag **<template></template>** este tag nos permite renderizar contenido sin necesidad de incluir tag. Es decir que al momento de renderizar Vuejs eliminara el **<template>** y solo quedara el **<p>** como en el ejemplo de abajo: 

**De igual forma se utiliza la directiva [v-slot:name-slot]**
```
$ <slot name="texto"></slot>
$ <slot name="link"></slot>
$
$ // en el padre
$ <ejemplo> <!-- componente -->
$   <template v-slot:texto>
$       <p> textoooooooooooooooooooooooo </p>
$   </template>
$   <template v-slot:link>
$      <a href="#">Link</a>
$   </template>
$
$ </ejemplo>
```
**CUALQUIER HTML VALIDO ES FACTIBLE PODER INYECTARLO MEDIANDO UN SLOT**