# amantes-api-backend

# API Amantes Ideal

## Authors

- Andrés Ramírez Madrigal  
- Ignacio Cordero Chinchilla
  
## Problem Description

Currently, many applications allow people with shared interests to connect. However, most of these solutions are complex and highly coupled, making them difficult to maintain and scale.

This project aims to simplify the problem of registering and querying profiles of potential partners (referred to as "ideal lovers") based on specific interests. The application will store basic information for each profile and perform filtered searches based on shared interests.

---

## Introduction

This project involves developing a REST API using Node.js and Express, following a layered architecture that promotes separation of responsibilities and decoupling between components.

The system will consist of an independent backend responsible for managing the business logic and data access via MongoDB, and a frontend developed in React that will consume the API.

Basic profile creation and query operations will be implemented, applying best practices in software design such as the use of DTOs for data validation and a modular structure that facilitates system scalability and maintenance.

Furthermore, all code will be generated using specialized artificial intelligence tools, and the prompts used will be documented as part of the development process.

## Prompts Used

### PROMPT 1

Actúa como un desarrollador senior especializado en Node.js, Express y arquitectura en capas.

Necesito que generes la estructura base de un backend para una API REST, asegurando una correcta separación de responsabilidades siguiendo una arquitectura en capas.

Contexto del proyecto:
Se trata de una API para registrar y consultar perfiles de personas ("amantes ideales") con nombre, edad e intereses. En este punto NO se debe implementar lógica de negocio ni endpoints, solo la base estructural del proyecto.

Tecnologías requeridas:
- Node.js
- Express
- Preparado para MongoDB con Mongoose (sin implementar aún)
- Uso de dotenv y cors

Estructura obligatoria de carpetas y responsabilidades:

1. controllers/
   - Manejan las solicitudes HTTP (request/response)
   - No contienen lógica de negocio
   - Llaman a los servicios

2. services/
   - Contienen la lógica de negocio
   - Procesan datos antes de enviarlos al repositorio
   - No interactúan directamente con Express

3. repositories/
   - Encargados de la comunicación con la base de datos
   - Ejecutan consultas (queries)
   - No contienen lógica de negocio

4. models/
   - Definen los esquemas de datos (MongoDB con Mongoose)
   - Representan la estructura de las entidades

5. dtos/
   - Validan y estructuran los datos de entrada
   - Aseguran que los datos recibidos sean correctos antes de procesarlos

6. routes/
   - Definen las rutas de la API
   - Conectan endpoints con los controllers

7. config/
   - Configuración del proyecto (por ejemplo conexión futura a base de datos)

Requisitos específicos:

1. Crear archivo principal app.js que:
   - Configure Express
   - Use middlewares:
     - express.json()
     - cors
   - Cargue variables de entorno con dotenv
   - Configure el puerto (process.env.PORT o 3000)
   - Importe y use las rutas principales

2. Crear un archivo routes/index.js que centralice las rutas (aunque estén vacías por ahora)

3. Preparar el proyecto para escalar (aunque no haya lógica aún)

4. No implementar endpoints todavía (ni POST ni GET)

5. Incluir comentarios en el código explicando el propósito de cada archivo y carpeta

6. Mantener código limpio, modular y profesional

Formato de salida esperado:

- Mostrar estructura de carpetas
- Mostrar contenido de archivos clave (app.js, rutas, configuración básica)
- No agregar frontend
- No implementar lógica de negocio
- No conectar aún a MongoDB

### PROMPT 2

Actúa como un desarrollador senior especializado en Node.js, Express, MongoDB y arquitectura en capas.

Partiendo de una estructura de proyecto ya creada con carpetas: controllers, services, repositories, models, dtos, routes y config, necesito que implementes la capa de datos y validación para una entidad llamada "Amante".

Contexto del proyecto:
Se trata de una API REST para registrar y consultar perfiles de personas ("amantes ideales"), con nombre, edad e intereses.

Requisitos técnicos:
- Usar MongoDB con Mongoose
- Mantener la arquitectura en capas ya definida
- No implementar aún controllers ni endpoints HTTP

---

1. MODELO (models/)
Crear un modelo llamado Amante usando Mongoose con las siguientes propiedades:

- nombre: string, requerido
- edad: number, requerido, debe ser mayor a 18
- intereses: array de strings, requerido

El modelo debe estar bien estructurado y preparado para escalar.

---

2. DTO (dtos/)
Crear un DTO llamado AmanteDTO que:

- Reciba los datos de entrada
- Valide:
  - nombre no vacío
  - edad mayor a 18
  - intereses debe ser un arreglo no vacío
- Lance errores claros si los datos son inválidos

No usar librerías externas, implementar validación manual.

---

3. REPOSITORY (repositories/)
Crear un AmanteRepository que:

- Contenga métodos:
  - create(amante)
  - findByInteres(interes)
- Use el modelo de Mongoose
- No tenga lógica de negocio, solo acceso a datos

---

4. CONFIG (config/)
Crear archivo de conexión a MongoDB (por ejemplo database.js):

- Usar mongoose.connect()
- Leer URI desde variables de entorno (.env)
- Exportar función para conectar la base de datos

---

5. INTEGRACIÓN

Modificar app.js para:

- Importar la conexión a la base de datos
- Ejecutarla al iniciar el servidor

---

6. REGLAS IMPORTANTES

- NO crear endpoints todavía
- NO mezclar responsabilidades entre capas
- Mantener código limpio y modular
- Agregar comentarios explicando cada parte

---

Formato de salida:

- Mostrar archivos creados/modificados
- Mostrar código completo de cada uno
- Mantener claridad y orden

### PROMPT 3

Actúa como un desarrollador senior especializado en Node.js, Express y arquitectura en capas.

Partiendo de un proyecto que ya tiene:
- Modelo Amante (Mongoose)
- DTO para validación
- Repository con métodos create y findByInteres
- Conexión a MongoDB configurada

Necesito que implementes la capa de servicios, controladores y endpoints REST respetando estrictamente la arquitectura en capas.

Contexto:
La API permite registrar perfiles de personas ("amantes") y consultarlos por interés.

---

1. SERVICES (services/)

Crear un AmanteService que:

- Use el AmanteRepository
- Use el AmanteDTO para validar datos antes de crear registros

Métodos requeridos:

a) createAmante(data)
   - Valida usando el DTO
   - Llama al repository para guardar
   - Retorna el resultado

b) getAmantesByInteres(interes)
   - Valida que el interés no esté vacío
   - Llama al repository para buscar coincidencias
   - Retorna los resultados

Reglas:
- Aquí va la lógica de negocio
- No usar Express directamente

---

2. CONTROLLERS (controllers/)

Crear un AmanteController que:

a) create(req, res)
   - Llama al service.createAmante
   - Maneja errores con try/catch
   - Retorna respuesta JSON

b) getByInteres(req, res)
   - Lee query param "interes"
   - Llama al service.getAmantesByInteres
   - Retorna resultados en JSON

Reglas:
- No poner lógica de negocio aquí
- Solo manejar request/response

---

3. ROUTES (routes/)

Actualizar o crear rutas para:

- POST /amantes → crear amante
- GET /amantes?interes=x → buscar por interés

Conectar estas rutas con el controller

---

4. MANEJO DE ERRORES

- Retornar status codes adecuados:
  - 201 → creación exitosa
  - 400 → errores de validación
  - 500 → errores internos

- Mensajes claros en JSON

---

5. INTEGRACIÓN

- Asegurar que las rutas estén conectadas en app.js
- Verificar que todo funcione correctamente

---

6. REGLAS IMPORTANTES

- No romper la arquitectura en capas
- No acceder al repository desde el controller directamente
- No validar datos en el controller (usar DTO)
- Código limpio y bien comentado

---

Formato de salida:

- Mostrar archivos creados/modificados
- Mostrar código completo
- Mantener claridad y orden

### PROMPT 4

Actúa como un desarrollador senior especializado en Node.js, MongoDB y buenas prácticas de inicialización de datos.

Partiendo de un backend ya funcional con:
- Arquitectura en capas (controllers, services, repositories, models, dtos)
- Endpoints implementados
- Conexión a MongoDB

Necesito que implementes un sistema de seed data automático y ajustes finales del proyecto.

---

1. SEED DATA

Crear un archivo (por ejemplo: seed.js o dentro de config/) que:

- Inserte automáticamente al iniciar la aplicación al menos 3-5 registros de "Amante"
- Cada registro debe tener:
  - nombre
  - edad (>18)
  - intereses variados (ej: "viajar", "leer", "cine")

Reglas:
- No duplicar datos si ya existen (verificar antes de insertar)
- Ejecutarse automáticamente cuando el servidor inicia

---

2. INTEGRACIÓN

Modificar app.js o el punto de arranque para:

- Ejecutar el seed después de conectar a la base de datos
- Asegurar que no bloquee el arranque del servidor

---

3. SCRIPTS (package.json)

Asegurar que existan:

- "dev": usando nodemon
- "start": usando node

Ejemplo:

"scripts": {
  "dev": "nodemon app.js",
  "start": "node app.js"
}

---

4. VARIABLES DE ENTORNO

Crear un archivo .env con:

- PORT=3000
- MONGO_URI=mongodb://localhost:27017/amantesDB

Asegurar que el proyecto use estas variables correctamente

---

5. VALIDACIÓN FINAL

Asegurar que:

- El proyecto corre con npm run dev
- Se conecta a MongoDB local
- Inserta datos automáticamente
- Los endpoints funcionan con esos datos

---

6. REGLAS IMPORTANTES

- No romper la arquitectura en capas
- Mantener código limpio y modular
- Comentar el código donde sea necesario

---

Formato de salida:

- Mostrar archivos creados/modificados
- Mostrar código completo
- Explicar brevemente cómo funciona el seed
