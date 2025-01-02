# "Task Manager"

Este proyecto es una aplicación de gestión de tareas que permite a los usuarios crear, editar, eliminar y marcar tareas como completadas o pendientes. 
A su vez está implementada en dos proyectos:

1. **Backend**: API creada en Node.js interactuando con base de datos en MongoDB.
2. **Frontend**: Aplicación React.js que consume del backend API para mostrar datos e interactuar con el usuario.

## Project Structure 

El proyecto está organizado en dos carpetas fundamentales:

- `\task-manager-backend`	: Contiene la API en Node.js.
- `\task-manager-frontend`	: Contiene la aplicación en React.js.

## Tecnologías usadas

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Swagger
  - Postman
  
- **Frontend**:
  - React.js
  - React Router
  - Hooks (useState, useEffect)
  - Chakra UI
  - Context API
  
- **Otras herramientas**:
  - Axios para realizar las peticiones HTTP.
  - dotenv para la configuración de variables de entorno.

## Características
- CRUD de tareas: Crear, leer, actualizar y eliminar tareas.
- Visualizar la lista de tareas en una interfaz intuitiva y moderna.
- Marcar tareas como completadas o pendientes.

## Requisitos
Node.js (v18 o superior)
MongoDB (Local)

### Backend

- **Node.js** 
- **MongoDB**		
- **Visual Studio** 

### Frontend

- **Node.js** (versión 18 o superior)
- **NPM** (viene con Node.js)
- **Visual Studio Code**
- **Google chrome browser**

## Instalación y Configuración

### 1. Clonar el Repo

Clonar los repositorios al equipo local:

```bash 
git clone https://github.com/GJGE04/task-manager-backend
git clone https://github.com/GJGE04/task-manager-frontend
```
### 2. Dependencias 

#### Backend

Para crear la estructura de la base de datos utilizando MongoDB y Mongoose en tu backend, seguir estos pasos:

1. Navegar al directorio backend y ejecuta el siguiente comando:

	npm install

2. Instalar dependencias
	Primero, se necesita instalar Mongoose (la librería que nos permite interactuar con MongoDB) y dotenv (para manejar las variables de entorno, como la URI de conexión de MongoDB).
	Ejecuta los siguientes comandos en la terminal:
	
			npm install mongoose dotenv
				
				ó todas las dependencias para trabajar con Express, Mongoose y manejo de variables de entorno
				
			npm install express mongoose dotenv body-parser cors express-validator	
				
3. En un archivo .env en la raíz del directorio backend tener configurado el Puerto y las siguientes variables de entorno:

	MONGODB_URI=mongodb://localhost:27017/task-manager
	PORT=5000
				
4. Configuración de la conexión a MongoDB
	En el archivo raíz del backend (por ejemplo, server.js o app.js), configurar la conexión a MongoDB.

	Primero, se crea un archivo .env en la raíz del proyecto para almacenar la URI de conexión de MongoDB:
	
	MONGO_URI=mongodb://localhost:27017/task-manager
	
	Este es un ejemplo de una URI para una base de datos local. Si estás usando un servicio como MongoDB Atlas, 
	la URI será algo así como 		  	mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/<nombre-de-tu-db>.
	
#### Frontend

1. Navega al directorio frontend y ejecuta el siguiente comando:

		npm install
	
2. Instalar otras dependencias necesarias, por ejemplo:

	- instalar axios (para las peticiones HTTP) y @chakra-ui/react (para los componentes de UI)
	
		npm install axios @chakra-ui/react @emotion/react @emotion/styled

	- Jest para pruebas unitarias
		
		npm install --save-dev jest supertest
		
	- Para correr pruebas unitarias:
	
		npm test
		
		npm test -- --coverage
	
### 3. Iniciar la aplicación 

#### Backend

1. Tener iniciado el servidor de MongoDB:

	net start MongoDB

2. En el directorio backend, ejecuta el siguiente comando para iniciar el servidor:

	npm start
	
El backend se ejecutará en http://localhost:5000.
	
#### Frontend

1. En el directorio frontend, ejecuta el siguiente comando para iniciar el servidor:

El frontend estará disponible en http://localhost:3000.

### 4. Endpoints en el Backend

- GET /api/tasks: Obtiene todas las tareas.
- POST /api/tasks: Crea una nueva tarea.
- GET /api/tasks/:id: Devuelve los detalles de una tarea específica.
- PUT /api/tasks/:id: Actualiza una tarea existente (por ejemplo, marcarla como completada).
- DELETE /api/tasks/:id: Elimina una tarea existente.  

### 4. Consideraciones

- Se escribieron pruebas unitarias para el backend (con Jest)
- El frontend permite filtrar las tareas por su estado: Completadas o Pendientes.





