import { cn } from '@/lib/utils'

export type BrandMarkVariant =
  'auto' | 'original' | 'light' | 'dark' | 'primary'

type BrandMarkProps = {
  className?: string
  variant?: BrandMarkVariant
}

const rings = [
  { count: 8, radius: 44 },
  { count: 16, radius: 80 },
  { count: 16, radius: 115 },
] as const

const palettes: Record<
  BrandMarkVariant,
  { dots: string; center: string; centerStroke: string }
> = {
  auto: {
    dots: 'currentColor',
    center: 'var(--accent)',
    centerStroke: 'currentColor',
  },
  original: {
    dots: '#121b1a',
    center: '#f9ca0d',
    centerStroke: '#5f541f',
  },
  light: {
    dots: '#111827',
    center: '#facc15',
    centerStroke: '#111827',
  },
  dark: {
    dots: '#fffdf5',
    center: '#fde047',
    centerStroke: '#fffdf5',
  },
  primary: {
    dots: '#2563eb',
    center: '#facc15',
    centerStroke: '#111827',
  },
}

export function BrandMark({ className, variant = 'auto' }: BrandMarkProps) {
  const palette = palettes[variant]

  return (
    <svg
      viewBox="0 0 280 280"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0', className)}
    >
      <g fill={palette.dots}>
        {rings.flatMap((ring, ringIndex) =>
          Array.from({ length: ring.count }, (_, dotIndex) => {
            const angle = (dotIndex * 2 * Math.PI) / ring.count - Math.PI / 2
            const x = 140 + Math.cos(angle) * ring.radius
            const y = 140 + Math.sin(angle) * ring.radius

            return (
              <circle
                key={`${ringIndex}-${dotIndex}`}
                cx={x}
                cy={y}
                r="12.25"
              />
            )
          }),
        )}
      </g>
      <circle
        cx="140"
        cy="140"
        r="20"
        fill={palette.center}
        stroke={palette.centerStroke}
        strokeWidth="3"
      />
    </svg>
  )
}
