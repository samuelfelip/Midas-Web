# Documentación de API

## Base URL
```http
http://localhost:3001
```

## Controlador de Autenticación (authController)

### 1. Registro de Usuario
```http
POST /auth/register
```

**Body de la petición:**
```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

**Respuesta exitosa:**
```json
{
  "status": "success",
  "message": "Usuario registrado exitosamente",
  "data": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

### 2. Inicio de Sesión
```http
POST /auth/login
```

**Body de la petición:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Respuesta exitosa:**
```json
{
  "status": "success",
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

## Controlador de Cursos (courseController)

### 1. Obtener todos los cursos
```http
GET /courses
```

**Headers:**
```
Authorization: Bearer {token}
```

**Respuesta exitosa:**
```json
{
  "status": "success",
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "instructor": "string",
      "createdAt": "date"
    }
  ]
}
```

### 2. Obtener un curso específico
```http
GET /courses/:id
```

**Headers:**
```
Authorization: Bearer {token}
```

**Parámetros de ruta:**
- `id`: ID del curso

**Respuesta exitosa:**
```json
{
  "status": "success",
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "instructor": "string",
    "createdAt": "date"
  }
}
```

### 3. Crear un nuevo curso
```http
POST /courses
```

**Headers:**
```
Authorization: Bearer {token}
```

**Body de la petición:**
```json
{
  "title": "string",
  "description": "string",
  "instructor": "string"
}
```

**Respuesta exitosa:**
```json
{
  "status": "success",
  "message": "Curso creado exitosamente",
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "instructor": "string",
    "createdAt": "date"
  }
}
```

## Códigos de Estado

- `200`: Petición exitosa
- `201`: Recurso creado exitosamente
- `400`: Error en la petición
- `401`: No autorizado
- `404`: Recurso no encontrado
- `500`: Error interno del servidor

## Notas Importantes

1. Todas las peticiones (excepto login y registro) requieren autenticación mediante token JWT.
2. El token debe ser incluido en el header de la petición como `Authorization: Bearer {token}`.
3. Las respuestas de error incluirán:
```json
{
  "status": "error",
  "message": "Descripción del error"
}
```