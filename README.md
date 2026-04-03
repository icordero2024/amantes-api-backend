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
