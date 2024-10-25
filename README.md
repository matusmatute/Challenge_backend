# API REST para prueba diagnostica con Node y Express
Este proyecto es una API REST de demostración construida con Node.js y Express. Se conecta a una base de datos MongoDB utilizando Mongoose y permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de películas. El proyecto está escrito en TypeScript. También se utilizan herramientas ESLint para análisis de código, y CORS para permitir solicitudes desde diferentes orígenes. La configuración de variables de entorno se gestiona con Dotenv.


# Instrucciones para ejecutar el proyecto

## 1. Instalar dependencias

Para instalar las dependencias del proyecto, ejecute el siguiente comando en la terminal:

    npm install

## 2. Iniciar el servidor

Para iniciar el servidor, ejecute el siguiente comando:

    npm run start

## 3. Probar el servidor

Después de iniciar el servidor, ejecute este comando para asegurarse de que funcione correctamente:

    npm run dev

## 4. Crear archivo de variables de entorno

Cree un archivo de variables de entorno con el siguiente nombre y añada las configuraciones necesarias:

    .env

### Ejemplo de contenido del archivo `.env`:

```
MONGO_CONNECTION=su_cadena_de_conexion
PORT=5000
```

Asegúrese de reemplazar `su_cadena_de_conexion` con su cadena de conexión real a la base de datos MongoDB.


### Tecnologias utilizadas en este proyecto:
- Node.js
- Express: 4.21.0
- Mongoose: 8.7.0
- TypeScript: 5.6.2
- Jest: 29.7.0
- ESLint: 9.11.1
- CORS: 2.8.5
- Dotenv: 16.4.5
- Yup: 1.4.0
