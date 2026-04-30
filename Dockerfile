# Multi-stage build for backend and frontend

# Stage 1: Backend (Laravel)
FROM php:8.3-fpm as backend

WORKDIR /app/backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite3 \
    libsqlite3-dev \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_sqlite mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy backend files
COPY backend/ .

# Install PHP dependencies
RUN composer install --no-interaction --optimize-autoloader

# Install Node dependencies and build assets
RUN npm install --ignore-scripts && npm run build

# Setup Laravel
RUN cp .env.example .env && \
    php artisan key:generate && \
    php artisan migrate --force --seed

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]


# Stage 2: Frontend (Next.js)
FROM node:22-alpine as frontend

WORKDIR /app/frontend

# Copy frontend files
COPY frontend/ .

# Install dependencies
RUN npm ci

# Build Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
