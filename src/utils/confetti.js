import confetti from 'canvas-confetti'

const COLORS = [
  '#7c3aed',
  '#ec4899',
  '#f59e0b',
  '#3b82f6',
  '#22d3ee',
  '#84cc16',
  '#fde047',
]

const baseOptions = { colors: COLORS, disableForReducedMotion: true }

export function fireInitialConfetti() {
  const start = Date.now()
  const duration = 1500

  const frame = () => {
    confetti({
      ...baseOptions,
      particleCount: 4,
      startVelocity: 32,
      spread: 360,
      ticks: 60,
      origin: { x: 0.5, y: 0.6 },
    })
    confetti({
      ...baseOptions,
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
    })
    confetti({
      ...baseOptions,
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
    })
    if (Date.now() - start < duration) {
      requestAnimationFrame(frame)
    }
  }

  frame()
}

export function fireCelebration() {
  confetti({
    ...baseOptions,
    particleCount: 90,
    spread: 70,
    startVelocity: 45,
    gravity: 1,
    origin: { y: 0.65 },
    scalar: 1.1,
  })
  confetti({
    ...baseOptions,
    shapes: ['star'],
    particleCount: 12,
    spread: 100,
    startVelocity: 30,
    scalar: 1.4,
    origin: { x: 0.5, y: 0.5 },
  })
  confetti({
    ...baseOptions,
    particleCount: 40,
    angle: 60,
    spread: 55,
    startVelocity: 55,
    origin: { x: 0, y: 0.75 },
  })
  confetti({
    ...baseOptions,
    particleCount: 40,
    angle: 120,
    spread: 55,
    startVelocity: 55,
    origin: { x: 1, y: 0.75 },
  })
}