# Proyecto React + TypeScript + Vite

Este proyecto utiliza React con TypeScript y Vite como bundler.

## Requisitos Previos

### Windows
- Node.js (versión 16.x o superior)
- npm (incluido con Node.js)
- Git

### Ubuntu (VPS)
- Node.js
- npm
- Git
- nginx (para servir la aplicación)

## Instalación

### Windows

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

### Ubuntu (VPS)

1. Actualizar el sistema:
```bash
sudo apt update
sudo apt upgrade
```

2. Instalar Node.js y npm:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

3. Instalar nginx:
```bash
sudo apt install nginx
```

4. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

5. Instalar dependencias:
```bash
npm install
```

6. Construir la aplicación:
```bash
npm run build
```

7. Configurar nginx:
```bash
sudo nano /etc/nginx/sites-available/mi-aplicacion
```

Añadir la siguiente configuración:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /ruta/al/proyecto/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

8. Activar el sitio:
```bash
sudo ln -s /etc/nginx/sites-available/mi-aplicacion /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la versión de producción localmente

## Configuración Adicional

### ESLint
El proyecto incluye una configuración básica de ESLint. Para habilitar reglas de tipo más estrictas:

1. Configura `parserOptions` en tu archivo `.eslintrc.js`:
```js
parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
}
```

2. Actualiza las extensiones de ESLint según necesites:
- Reemplaza `plugin:@typescript-eslint/recommended` por `plugin:@typescript-eslint/recommended-type-checked` o `plugin:@typescript-eslint/strict-type-checked`
- Opcionalmente añade `plugin:@typescript-eslint/stylistic-type-checked`
- Instala y configura `eslint-plugin-react`

## Solución de Problemas Comunes

### Windows
- Si hay problemas con los permisos de ejecución de scripts: Ejecutar PowerShell como administrador y usar `Set-ExecutionPolicy RemoteSigned`
- Para problemas de ENOENT: Verificar que Node.js está correctamente instalado y en el PATH

### Ubuntu
- Problemas de permisos: Usar `sudo chown -R $USER:$USER /ruta/al/proyecto`
- Si nginx no sirve los archivos: Verificar los permisos de la carpeta dist y la configuración de nginx

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
