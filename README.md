#### La API propuesta originalmente no funciona, cambié por esta alternativa:

[https://api.sampleapis.com/beers/ale/](https://api.sampleapis.com/beers/ale/)

### Objetivo

En esta actividad trabajaremos en la implementación del routing a nuestra aplicación de React con React Router.

### Instrucciones y requisitos de entrega

- Deberemos envolver con `BrowserRouter` nuestra App y definir las siguientes rutas:
  - `/`: (página de inicio) donde se deberá mostrar una grilla con todas las bebidas disponibles que devuelve la API.
  - `/contacto`: donde se mostrará la información de contacto de la empresa.
  - `/beer/:id`: donde se mostrará en detalle la información de una cerveza específica, buscada por su ID.

- Para la implementación de los Links deberemos crear un componente `Navbar` y renderizarlo únicamente en una ruta padre.

  - `src > Beer.jsx`
    - Agregar un botón de “volver atrás” que implemente el Hook `useNavigate()` y nos devuelva a la página anterior en la que estábamos posicionados.
