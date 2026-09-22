import { useMemo } from 'react'

const COLORS = [
  '#f472b6',
  '#a78bfa',
  '#fbbf24',
  '#60a5fa',
  '#f87171',
  '#22d3ee',
  '#4ade80',
  '#fb7185',
]

function Balloon({ color, left, size, duration, delay, sway }) {
  return (
    <div
      className="balloon"
      style={{
        '--color': color,
        '--duration': `${duration}s`,
        '--delay': `-${delay}s`,
        '--sway': `${sway}px`,
        left,
        width: size,
        height: Math.round(size * 1.18),
      }}
    >
      <span className="string" style={{ height: Math.round(size * 0.9) }} />
    </div>
  )
}

export default function Balloons({ count = 14 }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 42 + ((i * 13) % 40)
        return {
          id: i,
          color: COLORS[(i * 3) % COLORS.length],
          left: `${((i * 47) % 95) + 2}%`,
          size,
          duration: 8 + ((i * 5) % 7),
          delay: (i * 17) % 16,
          sway: ((i * 29) % 44) - 12,
        }
      }),
    [count],
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {balloons.map((balloon) => (
        <Balloon key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}