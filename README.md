# Formulario Act4

Aplicacion web full stack para registrar informacion de alumnos mediante un formulario.

El proyecto esta dividido en dos servicios:

- Backend REST API con Spring Boot.
- Frontend con React.

## Que hace la app

1. El usuario llena un formulario en el frontend.
2. El frontend envia los datos al backend por HTTP (`POST /api/form/submit`).
3. El backend valida los campos y procesa la solicitud.
4. El backend devuelve una respuesta con un mensaje.
5. El frontend muestra ese mensaje en pantalla.

Campos principales manejados por el formulario:

- nombre
- email
- telefono
- ciudad
- mensaje

## Arquitectura del proyecto

- `demo`: servicio backend (Spring Boot).
- `frontend-form-app`: servicio frontend (React + Vite).

El frontend corre en `http://localhost:5173` y usa proxy de Vite para redirigir `/api` al backend en `http://localhost:8080`.

## Ejecutar backend (Spring Boot)

En la terminal del repositorio:

cd demo
.\mvnw.cmd spring-boot:run


Backend disponible en:

-http://localhost:8080

## Ejecutar frontend (React)

En otra terminal, desde la raiz del repositorio:
cd frontend-form-app
npm install
npm run dev


Frontend disponible en:

- http://localhost:5173


