# Angular

#### Raúl Morales Ruiz

---

# Qué es Angular

Angular es un framework de desarrollo para JavaScript creado por Google.

La finalidad de Angular es facilitarnos el desarrollo de aplicaciones web SPA y además darnos herramientas para trabajar con los elementos de una web de una manera más sencilla y optima.

Otro propósito que tiene Angular es la separación completa entre el front-end y el back-end en una aplicación web.

# ¿Qué es una aplicación web SPA?

Una aplicación web SPA creada con Angular es una web de una sola página, en la cual la navegación entre secciones y páginas de la aplicación, así como la carga de datos, se realiza de manera dinámica, casi instantánea, asincronamente haciendo llamadas al servidor (backend con un API REST) y sobre todo sin refrescar la página en ningún momento.

---

# Primeros pasos

1.  Crear workspace

        ng new angular-app

2.  Ejecutar aplicación

        cd angular-app
        ng serve --open

# Funciones

- \*ngFor

        Bucle for

- \*ngIf

        Condicional if

- Interpolación {{ }}

        Representa el valor de una propiedad como texto

- Vinculación de propiedad [ ]

        Permite usar el valor de la propiedad en una expresión de plantilla

- Enlace de eventos ( )

        Permite utilizar enlaces.

- Código de ejemplo.

        <div *ngFor="let product of products">

        <h3>
            <a [title]="product.name + ' details'">
            {{ product.name }}
            </a>
        </h3>

        <p *ngIf="product.description">
            Description: {{ product.description }}
        </p>

        <button (click)="share()">
            Share
        </button>

        </div>

---

# Componentes

- Una clase de componente que maneja datos y funcionalidad.

- Una plantilla HTML que determina la interfaz de usuario.

- Estilos de componentes específicos que definen la apariencia.

## Crear componente usando CLI angular

Desde una ventana de terminal, navegue hasta el directorio que contiene su aplicación.

- Ejecutar comando

        ng generate component <component-name>

        <component-name> es el nombre de su nuevo componente.

## Ciclo de vida de los componentes

- Comienza cuando Angular crea una instancia de la clase de componente y representa la vista del componente junto con sus vistas secundarias.

- Continúa con la detección de cambios, ya que Angular verifica cuándo cambian las propiedades vinculadas a datos y actualiza tanto la vista como la instancia del componente según sea necesario.

- Termina cuando Angular destruye la instancia del componente y elimina su plantilla renderizada del DOM.

---

# Navegación

En una aplicación de una sola página, en lugar de cargar páginas nuevas, se muestran diferentes componentes y datos al usuario en función de dónde se encuentra el usuario en la aplicación.

## Registro de una ruta

Crear la ruta sirve para indicar a la aplicación dónde debe dirigir el foco o página que se muestra en el momento.

## Información de una ruta

Al navegar, haciendo click sobre diferentes elementos, se puede mostrar información de cada elemento.

En el caso de un producto, se podría mostrar el nombre, precio y descripción por ejemplo.

---

# Servicios

Son instancias de una clase que puede poner a disposición de cualquier parte de su aplicación utilizando el sistema de inyección de dependencias de Angular.

Los servicios son el lugar donde comparte datos entre distintas partes de su aplicación.

---

# Creación y prueba de proyecto Angular

https://github.com/raulmoralesruiz/Angular-Test

- El proyecto incluye una aplicación que simula una tienda de productos.

Dentro del proyecto se pueden ver las intrucciones del mismo.
