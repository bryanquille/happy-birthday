import { useEffect, useMemo } from 'react'
import Balloons from './components/Balloons.jsx'
import BirthdayCard from './components/BirthdayCard.jsx'
import { fireInitialConfetti } from './utils/confetti.js'

const DEFAULT_NAME = 'Amiga/o'

function capitalizeEachWord(value) {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getNameFromUrl() {
  if (typeof window === 'undefined') return DEFAULT_NAME

  const params = new URLSearchParams(window.location.search)
  const raw = params.get('nombre') || params.get('name')

  if (!raw) return DEFAULT_NAME

  const clean = raw.trim().replace(/\s+/g, ' ').slice(0, 40)
  return clean.length > 0 ? capitalizeEachWord(clean) : DEFAULT_NAME
}

function useGlowDots(count = 12) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const side = i % 2 === 0
        return {
          id: i,
          left: i % 2 === 0 ? `${2 + (i * 9) % 45}%` : `${52 + (i * 7) % 45}%`,
          top: `${8 + (i * 13) % 80}%`,
          duration: `${2 + (i * 3) % 4}s`,
          delay: `${(i * 7) % 5}s`,
          style: { ...(side && { width: 4, height: 4 }) },
        }
      }),
    [count],
  )
}

export default function App() {
  const name = useMemo(() => getNameFromUrl(), [])
  const dots = useGlowDots()

  useEffect(() => {
    fireInitialConfetti()
  }, [])

  return (
    <main className="bg-animated relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-10">
      <Balloons />

      {dots.map((dot) => (
        <span
          key={dot.id}
          className="glow-dot animate-twinkle"
          style={{
            left: dot.left,
            top: dot.top,
            animationDuration: dot.duration,
            animationDelay: dot.delay,
          }}
        />
      ))}

      <div className="relative z-10 flex w-full flex-col items-center">
        <BirthdayCard key={name} name={name} />
        <p className="mt-6 text-center text-xs font-medium tracking-wide text-white/70">
          Hecho con 💜 para {name} 🎈
        </p>
      </div>
    </main>
  )
}