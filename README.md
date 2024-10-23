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

