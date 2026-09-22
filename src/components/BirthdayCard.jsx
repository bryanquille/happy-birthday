import { useState } from 'react'
import { Cake, Gift, PartyPopper, Sparkles, Star } from 'lucide-react'
import { fireCelebration } from '../utils/confetti.js'

const WISHES = [
  'Que cada día brille un poquito más que el anterior. ✨',
  'Persigue tus sueños, porque el mundo ya es tuyo. 🚀',
  'Ríe fuerte, abraza mucho y vive sin miedo. 💕',
  'Que este nuevo ciclo llegue repleto de bendiciones. 🌈',
]

function Divider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-200/70 sm:w-16" />
      <Star className="size-4 fill-amber-300 text-amber-300" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-200/70 sm:w-16" />
    </div>
  )
}

export default function BirthdayCard({ name }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleCelebrate = () => {
    fireCelebration()
    setIsOpen(true)
  }

  return (
    <section className="animate-pop-in relative w-full max-w-md rounded-3xl border border-white/25 bg-white/10 px-6 py-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-10">
      <div className="card-shine pointer-events-none absolute inset-0 -z-10 rounded-3xl" />

      <div className="mb-4 flex justify-center">
        <Cake
          className="animate-bob size-16 text-amber-300 drop-shadow-[0_0_18px_rgba(251,191,36,0.7)] sm:size-20"
          strokeWidth={1.5}
        />
      </div>

      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-pink-200/90">
        Hoy es un día muy especial
      </p>

      <h1 className="font-display mt-3 text-center text-4xl leading-tight font-extrabold text-white sm:text-5xl">
        ¡Feliz Cumpleaños,
        <span className="text-gradient block">{name}!</span>
        <span className="inline-block animate-bob mt-2 ml-2" aria-hidden="true">
          🎉
        </span>
      </h1>

      <Divider />

      <p className="text-center text-base leading-relaxed text-purple-100/95 sm:text-lg">
        Que este nuevo año de vida sea un viaje lleno de sueños cumplidos,
        momentos que roben tu sonrisa y personas que celebren cada paso a tu
        lado. El mundo es un lugar más brillante porque tú estás en él. 💜
      </p>

      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={handleCelebrate}
          className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-500 px-8 py-4 font-display text-lg font-bold text-white shadow-lg shadow-pink-500/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-500/50 active:scale-95"
        >
          <Gift className="size-6 transition-transform duration-300 group-hover:rotate-12" />
          {isOpen ? '¡Celebrar otra vez! 🎉' : '¡Abrir sorpresa! 🎁'}
          <Sparkles className="size-4 opacity-80" />
        </button>

        <p className="text-center text-xs text-purple-200/80">
          Pulsa el botón y descubre un poco de magia
        </p>
      </div>

      {isOpen && (
        <div className="animate-pop-in mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
          <p className="flex items-center gap-2 font-display font-bold text-amber-200">
            <PartyPopper className="size-5" />
            Un poco de magia solo para ti:
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-purple-50">
            {WISHES.map((wish, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-left"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="mt-0.5 text-amber-300">✦</span>
                <span>{wish}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}