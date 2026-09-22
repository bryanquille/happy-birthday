# 🎉 Happy Birthday — Tarjeta de Cumpleaños Interactiva

**Language / Idioma:** 🇪🇸 [Español](#-español) · 🇬🇧 [English](#-english)

---

## 🇪🇸 Español

Aplicación web moderna y festiva para felicitar a alguien por su cumpleaños.
Lee el nombre del festejado desde la URL, lanza confeti y muestra una tarjeta
glassmorphism con globos animados, mensajes motivacionales y una sorpresa extra.

## 🛠️ Tecnologías

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (vía `@tailwindcss/vite`)
- **Lucide React** (iconos)
- **canvas-confetti** (confeti)

## 🚀 Instalación

```bash
# Con pnpm
pnpm install

# Con npm
npm install

# Con yarn
yarn install
```

> Si se instalara la librería de confeti por separado:
>
> ```bash
> pnpm add canvas-confetti
> # o
> npm install canvas-confetti
> # o
> yarn add canvas-confetti
> ```

## ▶️ Uso

```bash
pnpm dev     # desarrollo en http://localhost:5173
pnpm build   # build de producción en /dist
pnpm preview # previsualizar el build
```

## 🔗 Cómo pasar el nombre por la URL

La app lee el nombre usando `URLSearchParams` sobre `window.location.search`:

```js
// src/App.jsx
const params = new URLSearchParams(window.location.search)
const raw = params.get('nombre') || params.get('name')
```

Enlaces válidos:

```
https://mi-web.com/?nombre=Pepito
https://mi-web.com/?nombre=Pepito%20Garc%C3%ADa   (espacios y acentos codificados)
https://mi-web.com/?name=Maria
https://mi-web.com/                                (sin nombre → muestra "Amiga/o")
```

Si no se pasa `nombre`/`name` se muestra el nombre por defecto (**"Amiga/o"**).
Cambiar el parámetro en la URL y recargar actualiza la tarjeta al instante.

### 📌 Nota sobre nombres con espacios y acentos

Al generar el enlace con JavaScript usa **`encodeURIComponent`** para que el
navegador no rompa la URL:

```js
const link = `https://mi-web.com/?nombre=${encodeURIComponent('María José')}`
```

## 📁 Estructura

```
happy-birthday/
├── index.html                 # Título, fuentes (Baloo 2 + Quicksand) y SEO básico
├── vite.config.js             # Plugins de React + Tailwind
└── src/
    ├── main.jsx               # Punto de entrada
    ├── App.jsx                # Lee ?nombre=, fondo, globos, destellos y confeti inicial
    ├── index.css              # Tailwind v4, tema, keyframes y estilos custom
    ├── components/
    │   ├── BirthdayCard.jsx   # Tarjeta glassmorphism con botón sorpresa
    │   └── Balloons.jsx       # Globos flotando con animación CSS
    └── utils/
        └── confetti.js        # fireInitialConfetti() y fireCelebration()
```

## ✨ Features

- Confeti automático al cargar la página + confeti extra al pulsar el botón.
- Botón **"¡Abrir sorpresa!"** que revela un panel con deseos motivacionales.
- Fondo con gradiente animado, globos flotando y puntos brillantes (twinkle).
- Respeto a `prefers-reduced-motion`.
- Diseño 100% responsive centrado en un `max-w-md` (ideal para móviles).

---

## 🇬🇧 English

A modern and festive web app for wishing someone a happy birthday. It reads the
birthday person's name from the URL, fires confetti and shows a glassmorphism
card with animated balloons, motivational messages and an extra surprise.

### 🛠️ Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Lucide React** (icons)
- **canvas-confetti** (confetti)

### 🚀 Installation

```bash
# With pnpm
pnpm install

# With npm
npm install

# With yarn
yarn install
```

> If the confetti library needs to be installed separately:
>
> ```bash
> pnpm add canvas-confetti
> # or
> npm install canvas-confetti
> # or
> yarn add canvas-confetti
> ```

### ▶️ Usage

```bash
pnpm dev     # development at http://localhost:5173
pnpm build   # production build into /dist
pnpm preview # preview the build
```

### 🔗 How to pass the name via the URL

The app reads the name using `URLSearchParams` on `window.location.search`:

```js
// src/App.jsx
const params = new URLSearchParams(window.location.search)
const raw = params.get('nombre') || params.get('name')
```

Valid links:

```
https://my-site.com/?nombre=John
https://my-site.com/?nombre=John%20Doe           (encoded spaces and accents)
https://my-site.com/?name=Maria
https://my-site.com/                              (no name → shows "Amiga/o")
```

If neither `nombre` nor `name` is provided, the default name (**"Amiga/o"**)
is shown. Changing the parameter in the URL and reloading updates the card
instantly.

### 📌 Note about names with spaces and accents

When building the link in JavaScript use **`encodeURIComponent`** so the
browser doesn't break the URL:

```js
const link = `https://my-site.com/?nombre=${encodeURIComponent('María José')}`
```

### 📁 Project structure

```
happy-birthday/
├── index.html                 # Title, fonts (Baloo 2 + Quicksand) and basic SEO
├── vite.config.js             # React + Tailwind plugins
└── src/
    ├── main.jsx               # Entry point
    ├── App.jsx                # Reads ?nombre=, background, balloons, twinkles and initial confetti
    ├── index.css              # Tailwind v4, theme, keyframes and custom styles
    ├── components/
    │   ├── BirthdayCard.jsx   # Glassmorphism card with surprise button
    │   └── Balloons.jsx       # Floating balloons with CSS animation
    └── utils/
        └── confetti.js        # fireInitialConfetti() and fireCelebration()
```

### ✨ Features

- Automatic confetti on page load + extra confetti when the button is pressed.
- **"¡Abrir sorpresa!"** button that reveals a panel with motivational wishes.
- Animated gradient background, floating balloons and twinkling dots.
- Respects `prefers-reduced-motion`.
- Fully responsive layout centered on a `max-w-md` (ideal for mobile).