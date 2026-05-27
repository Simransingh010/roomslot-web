# 🏨 RoomSlot

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Laravel](https://img.shields.io/badge/Laravel-13.0-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

RoomSlot is a premium, modern, high-performance web platform designed to redefine how spaces, rooms, and slots are discovered, listed, and booked. Featuring a stunning user experience constructed with **Next.js 16**, **React 19**, and **Tailwind CSS v4** on the frontend, and backed by a robust, secure **Laravel 13** API backend.

---

## ✨ Key Features

- **🌐 Aesthetic & Responsive Landing Page**: Complete with a modular Hero section, modern Category selectors, robust search tools, and dynamic testimonial layouts.
- **⚡ Advanced Micro-interactions**: Smooth transitions and interactive elements powered by Framer Motion and Radix UI.
- **🛡️ Comprehensive Auth Flows**: Seamless user onboarding including Role Selection, Register/Login templates, Forgot/Reset Password views, and OTP verification layouts.
- **💼 Host Dashboard Integration**: Dedicated workflows for users to list their own spaces under a modern "Become a Host" dashboard.
- **📐 Flexible Architectural Split**: Completely decoupled frontend and backend architectures ensuring independent scaling and high maintainability.

---

## 🛠️ Tech Stack

### Frontend (`/frontend`)
* **Framework:** Next.js 16 (App Router)
* **Library:** React 19
* **Styling:** Tailwind CSS v4, Vanilla CSS
* **Animations:** Framer Motion
* **Primitives:** Radix UI Dialog & Dropdown
* **Language:** TypeScript
* **Package Manager:** `pnpm` (or `npm`)

### Backend (`/backend`)
* **Framework:** Laravel 13
* **Language:** PHP 8.3+
* **Development Utilities:** Vite 8, Concurrently 9, Laravel Pail, Pint, Mockery
* **Testing:** PHPUnit 12

---

## 📂 Project Structure

```bash
roomslot-web/
├── backend/            # Laravel 13 REST API
│   ├── app/            # Application core (Controllers, Models, Providers)
│   ├── config/         # System configurations
│   ├── database/       # Migrations, seeders, factories (SQLite default setup)
│   ├── routes/         # API & Web routes
│   └── tests/          # Backend PHPUnit tests
└── frontend/           # Next.js 16 Client App
    ├── public/         # Static assets (images, icons)
    └── src/
        ├── app/        # App Router Pages & Pages layouts
        ├── components/ # Reusable UI components & sections
        ├── data/       # Static mock datasets
        ├── lib/        # Utility helpers
        └── types/      # TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v18.x or higher)
* [PHP](https://www.php.net/) (v8.3 or higher)
* [Composer](https://getcomposer.org/) (v2.x or higher)
* [pnpm](https://pnpm.io/) *(recommended)* or `npm`

---

### 1. Backend Setup (`/backend`)

1. **Navigate to the backend folder**:
   ```bash
   cd backend
   ```

2. **Install Composer dependencies**:
   ```bash
   composer install
   ```

3. **Configure Environment Variables**:
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   *By default, the backend is configured to use a SQLite database (`database/database.sqlite`). You may customize these settings in your `.env`.*

4. **Generate Application Key**:
   ```bash
   php artisan key:generate
   ```

5. **Run Migrations & Seeders**:
   Create the database and execute database migrations:
   ```bash
   touch database/database.sqlite
   php artisan migrate
   ```

6. **Start the Backend Dev Server**:
   ```bash
   composer dev
   ```
   *This starts the Laravel local serve along with queue listeners and logging plugins simultaneously via Concurrently.*

---

### 2. Frontend Setup (`/frontend`)

1. **Navigate to the frontend folder**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   Using `pnpm`:
   ```bash
   pnpm install
   ```
   *Or using npm:*
   ```bash
   npm install
   ```

3. **Start the Next.js Development Server**:
   Using `pnpm`:
   ```bash
   pnpm dev
   ```
   *Or using npm:*
   ```bash
   npm run dev
   ```

4. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the client app running.

---

## 🤝 Contributing

We welcome contributions! To keep our codebase clean, optimized, and consistent, please follow these guidelines:

### 1. Branching & Workflow
1. Fork the repository and create your feature branch from the `main` branch.
   ```bash
   git checkout -b feature/amazing-feature
   ```
2. Make your changes and commit with descriptive messages following [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add slot booking modal animations"
   ```

### 2. Coding Standards
* **Frontend**: Ensure typescript runs without errors and files are linted:
  ```bash
  pnpm lint
  ```
* **Backend**: Run Laravel Pint to check and fix PHP code style:
  ```bash
  vendor/bin/pint
  ```

### 3. Submitting a Pull Request (PR)
1. Push your branch to GitHub:
   ```bash
   git push origin feature/amazing-feature
   ```
2. Open a Pull Request pointing towards the `main` branch of the root repository.
3. Provide a clear summary of your changes in the PR description, along with any relevant issue references or screenshots.
4. Wait for code review. Make adjustments if required, and once approved, your changes will be merged!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
