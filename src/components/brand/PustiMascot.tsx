import { useId } from 'react'
import { cn } from '@/lib/utils'

export type PustiPose =
  | 'neutral'
  | 'wave'
  | 'celebrate'
  | 'think'
  | 'read'
  | 'encourage'
  | 'surprised'
  | 'listen'

type PustiMascotProps = {
  animated?: boolean
  className?: string
  label?: string
  pose?: PustiPose
}

const colors = {
  navy: '#102a4c',
  cream: '#fffaf0',
  blue: '#2563eb',
  blueLight: '#60a5fa',
  yellow: '#ffc51c',
  white: '#ffffff',
} as const

const bodyPath = [
  'M 160 41',
  'C 145 24 118 24 98 35',
  'C 84 44 78 59 78 76',
  'C 54 74 34 87 26 106',
  'C 18 125 23 144 36 158',
  'C 22 173 19 194 27 212',
  'C 36 232 53 241 73 241',
  'C 70 260 82 276 100 282',
  'C 117 288 135 283 146 274',
  'C 155 285 171 289 187 286',
  'C 202 283 211 278 219 270',
  'C 230 280 247 282 261 273',
  'C 276 264 281 249 278 235',
  'C 296 230 307 214 307 195',
  'C 307 178 301 167 291 158',
  'C 302 144 306 126 299 109',
  'C 290 89 274 78 251 77',
  'C 251 58 241 43 226 34',
  'C 204 22 178 25 160 41',
  'Z',
].join(' ')

const leftFoot =
  'M 130 267 C 129 280 126 286 113 289 C 98 291 88 298 91 307 C 94 316 112 316 126 312 C 139 309 144 302 139 292 C 136 285 133 276 130 267 Z'
const rightFoot =
  'M 190 267 C 191 280 194 286 207 289 C 222 291 232 298 229 307 C 226 316 208 316 194 312 C 181 309 176 302 181 292 C 184 285 187 276 190 267 Z'

function ArmPath({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={colors.navy}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function Hand({
  cx,
  cy,
  radius = 14,
}: {
  cx: number
  cy: number
  radius?: number
}) {
  return <circle cx={cx} cy={cy} r={radius} fill={colors.navy} />
}

function PoseDetails({ pose }: { pose: PustiPose }) {
  switch (pose) {
    case 'wave':
      return (
        <>
          <ArmPath d="M 78 202 Q 61 219 57 241" />
          <Hand cx={52} cy={250} />
          <g className="pusti-wave-arm">
            <ArmPath d="M 278 177 Q 309 158 318 134" />
            <Hand cx={321} cy={119} radius={15} />
          </g>
        </>
      )
    case 'celebrate':
      return (
        <>
          <ArmPath d="M 75 178 Q 39 153 4 132" />
          <Hand cx={-8} cy={123} />
          <ArmPath d="M 281 178 Q 317 153 332 132" />
          <Hand cx={330} cy={123} />
          <g
            className="pusti-sparkles"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="7"
            strokeLinecap="round"
          >
            <path d="M 33 92 L 21 79 M 56 82 L 52 64 M 287 82 L 291 64 M 310 92 L 322 79" />
          </g>
        </>
      )
    case 'think':
      return (
        <>
          <ArmPath d="M 77 206 Q 61 223 57 244" />
          <Hand cx={52} cy={253} />
          <ArmPath d="M 277 205 Q 263 216 250 203" />
        </>
      )
    case 'read':
      return (
        <>
          <ArmPath d="M 76 211 Q 92 218 108 225" />
          <ArmPath d="M 280 211 Q 264 218 248 225" />
        </>
      )
    case 'encourage':
      return (
        <>
          <g className="pusti-wave-arm">
            <ArmPath d="M 76 176 Q 44 139 39 104" />
            <Hand cx={37} cy={90} />
          </g>
          <ArmPath d="M 279 205 Q 295 220 298 240" />
          <Hand cx={301} cy={249} />
        </>
      )
    case 'surprised':
      return (
        <>
          <ArmPath d="M 76 196 Q 52 195 35 179" />
          <Hand cx={27} cy={173} />
          <ArmPath d="M 280 196 Q 304 195 321 179" />
          <Hand cx={329} cy={173} />
        </>
      )
    case 'listen':
      return (
        <>
          <ArmPath d="M 76 205 Q 60 222 56 243" />
          <Hand cx={51} cy={252} />
          <ArmPath d="M 280 194 Q 296 184 294 165" />
          <Hand cx={293} cy={155} />
          <path
            d="M 304 147 Q 319 158 308 173"
            fill="none"
            stroke={colors.blue}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 314 138 Q 337 157 320 182"
            fill="none"
            stroke={colors.yellow}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </>
      )
    default:
      return (
        <>
          <ArmPath d="M 75 205 Q 55 215 40 226" />
          <Hand cx={28} cy={231} />
          <ArmPath d="M 281 205 Q 301 215 316 226" />
          <Hand cx={328} cy={231} />
        </>
      )
  }
}

function Face({ pose }: { pose: PustiPose }) {
  const closedEyes = pose === 'celebrate'
  const openMouth = pose === 'celebrate' || pose === 'encourage'
  const surprised = pose === 'surprised'

  return (
    <>
      {pose === 'think' || surprised ? (
        <path
          d="M 109 117 Q 124 108 138 117 M 182 117 Q 196 108 211 117"
          fill="none"
          stroke={colors.navy}
          strokeWidth="5"
          strokeLinecap="round"
        />
      ) : null}

      {closedEyes ? (
        <path
          d="M 109 153 Q 124 136 139 153 M 181 153 Q 196 136 211 153"
          fill="none"
          stroke={colors.navy}
          strokeWidth="7"
          strokeLinecap="round"
        />
      ) : (
        <g className="pusti-eyes">
          <ellipse cx="124" cy="150" rx="15" ry="25" fill={colors.navy} />
          <ellipse cx="196" cy="150" rx="15" ry="25" fill={colors.navy} />
          <ellipse cx="119" cy="139" rx="4.5" ry="7" fill={colors.white} />
          <ellipse cx="191" cy="139" rx="4.5" ry="7" fill={colors.white} />
        </g>
      )}

      <circle cx="95" cy="184" r="12" fill={colors.yellow} />
      <circle cx="225" cy="184" r="12" fill={colors.yellow} />

      {surprised ? (
        <ellipse
          cx="160"
          cy="198"
          rx="9"
          ry="12"
          fill="none"
          stroke={colors.navy}
          strokeWidth="6"
        />
      ) : openMouth ? (
        <g>
          <path
            d="M 139 188 Q 160 215 181 188 Z"
            fill={colors.navy}
            stroke={colors.navy}
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M 149 205 Q 160 211 171 205"
            fill="none"
            stroke={colors.blue}
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      ) : (
        <path
          d="M 142 187 Q 160 205 178 187"
          fill="none"
          stroke={colors.navy}
          strokeWidth="6"
          strokeLinecap="round"
        />
      )}
    </>
  )
}

function FrontDetails({ pose }: { pose: PustiPose }) {
  if (pose === 'think') {
    return (
      <>
        <Hand cx={242} cy={197} />
        <circle cx="222" cy="186" r="4" fill={colors.navy} />
      </>
    )
  }

  if (pose !== 'read') {
    return null
  }

  return (
    <g className="pusti-prop">
      <path
        d="M 72 207 Q 116 194 160 220 L 160 294 Q 116 268 72 278 Z"
        fill={colors.blue}
        stroke={colors.navy}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M 248 207 Q 204 194 160 220 L 160 294 Q 204 268 248 278 Z"
        fill={colors.blueLight}
        stroke={colors.navy}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M 160 220 L 160 294" stroke={colors.navy} strokeWidth="5" />
      <Hand cx={92} cy={229} />
      <Hand cx={228} cy={229} />
    </g>
  )
}

export function PustiMascot({
  animated = false,
  className,
  label,
  pose = 'neutral',
}: PustiMascotProps) {
  const titleId = useId()

  return (
    <svg
      viewBox="-24 -10 368 368"
      role={label ? 'img' : undefined}
      aria-hidden={label ? undefined : true}
      aria-labelledby={label ? titleId : undefined}
      focusable="false"
      data-pose={pose}
      className={cn(
        'pusti-mascot shrink-0',
        animated && 'pusti-mascot--animated',
        className,
      )}
    >
      {label ? <title id={titleId}>{label}</title> : null}
      <g className="pusti-body">
        <path d={leftFoot} fill={colors.navy} />
        <path d={rightFoot} fill={colors.navy} />
        <PoseDetails pose={pose} />
        <path
          d={bodyPath}
          fill={colors.cream}
          stroke={colors.navy}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Face pose={pose} />
        <FrontDetails pose={pose} />
      </g>
    </svg>
  )
}
