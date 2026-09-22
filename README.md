# 🎉 Happy Birthday — Tarjeta de Cumpleaños Interactiva

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