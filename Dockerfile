# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar cache de capas
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la app para producción
RUN npm run build

# ---------- Stage 2: Serve con Nginx ----------
FROM nginx:stable-alpine

# Copiar el build al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración de Nginx para SPA (react-router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

