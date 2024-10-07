
# Proyecto Angular 16 - Gestión de Personas

Este proyecto es una aplicación de gestión de personas construida con Angular 16. Sigue las instrucciones a continuación para clonar y configurar el proyecto.

## Prerrequisitos

- [Node.js y npm](https://nodejs.org/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone (https://github.com/Kevinrente/kjrt_persona_angular.git)
   cd kjrt_persona_angular
Instala las dependencias del proyecto:

bash

Copiar
npm install
Configura la URL de la API en el servicio:

Abre el archivo persona.service.ts que se encuentra en la carpeta src/app.

Cambia la URL de la API en la variable urlApi si es necesario:

typescript

Copiar
private urlApi = 'http://localhost:5025/api/Personas';
Ejecución
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

bash

Copiar
ng serve
La aplicación estará disponible en http://localhost:4200.

Uso
Funcionalidades Principales
Ver Personas: Ver una lista de todas las personas registradas.

Agregar Persona: Agregar una nueva persona a través del formulario.

Editar Persona: Editar los datos de una persona existente.

Eliminar Persona: Eliminar una persona de la lista.

Endpoints de la API
GET /api/Personas: Obtiene todas las personas.

GET /api/Personas/{id}: Obtiene una persona por ID.

POST /api/Personas: Crea una nueva persona.

PUT /api/Personas/{id}: Actualiza una persona por ID.

DELETE /api/Personas/{id}: Elimina una persona por ID.
