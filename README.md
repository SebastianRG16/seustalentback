# EJECUTAR PROYECTO

Instalar dependencias: npm install

(Antes de correrlo es necesario hacer migraciones)

Correr el proyecto: npm run dev

# CRAEAR DB POSTGRES

Se trabajo con base de datos en postgres en el archivo config/config.json esta la conexion y las variables a tener en cuenta para esta db.

En el proyecto la db de llama: SEUSTALENT

# REALIZAR MIGRACIONES SEQULIZE

Crear migraciones: npx sequelize db:migrate

Deshacer migraciones: npx sequelize db:migrate:undo

Utilizar en postman o algun otro gestor despues de realizar migraciones: http://localhost:3000

# OBLIGATORIO PARA QUE FUNCIONE

( En el front esta quemado el id de usuario 1 por eso es importante la creacion de un usuario, en todos los enpoinds de usa )

en la ruta: http://localhost:3000/users crear un nuevo usuario

JSON para crear usuario:

{
"username" : "username",
"password" : "password"
}
