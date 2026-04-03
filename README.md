# amantes-api-backend

# API Amantes Ideal

## Descripción del problema

En la actualidad, muchas aplicaciones permiten conectar personas con intereses en común, sin embargo, la mayoría de estas soluciones son complejas y están altamente acopladas entre sus componentes, lo que dificulta su mantenimiento y escalabilidad.

Este proyecto busca resolver de manera simplificada el problema de registrar y consultar perfiles de posibles parejas (denominados "amantes ideales") basándose en intereses específicos. La aplicación permitirá almacenar información básica de cada perfil y realizar búsquedas filtradas según intereses comunes.

---

## Introducción

El presente proyecto consiste en el desarrollo de una API REST utilizando Node.js y Express, siguiendo una arquitectura en capas que promueve la separación de responsabilidades y el desacople entre componentes.

El sistema estará compuesto por un backend independiente encargado de gestionar la lógica del negocio y el acceso a datos mediante MongoDB, y un frontend desarrollado en React que consumirá dicha API.

Se implementarán operaciones básicas de creación y consulta de perfiles, aplicando buenas prácticas de diseño de software como el uso de DTOs para validación de datos y una estructura modular que facilite la escalabilidad y mantenimiento del sistema.

Además, todo el código será generado mediante herramientas de inteligencia artificial especializadas, documentando los prompts utilizados como parte del proceso de desarrollo.

## Promts usados

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
