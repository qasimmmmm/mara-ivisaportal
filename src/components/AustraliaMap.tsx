import { clsx } from 'clsx'

/**
 * Stylised Australia silhouette used as the hero visual.
 * Clean blue gradient with subtle contour lines and an east-coast location marker.
 * Purely decorative; marked aria-hidden.
 */
export default function AustraliaMap({ className }: { className?: string }) {
  // Simplified, stylised Australia outline. Recognisable, not survey-accurate.
  const australia =
    'M148 138 C176 120 206 116 236 120 C250 110 268 96 282 104 C290 110 286 126 296 130 ' +
    'C322 136 356 130 388 140 C420 150 446 168 458 196 C468 220 462 250 470 274 ' +
    'C476 292 470 314 452 326 C436 336 420 330 404 340 C388 350 380 372 360 380 ' +
    'C336 390 308 384 282 392 C256 400 232 416 206 410 C182 404 168 380 150 364 ' +
    'C128 344 100 336 86 312 C74 292 80 266 74 244 C68 222 50 206 56 184 ' +
    'C62 164 88 160 106 150 C120 142 134 146 148 138 Z'

  return (
    <svg
      viewBox="0 0 520 460"
      className={clsx(className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="0.55" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <clipPath id="landClip">
          <path d={australia} />
        </clipPath>
      </defs>

      {/* Landmass */}
      <path d={australia} fill="url(#land)" />

      {/* Subtle contour lines inside the land */}
      <g clipPath="url(#landClip)" stroke="#93c5fd" strokeWidth="1.4" fill="none" opacity="0.45">
        <path d="M120 360 C200 300 320 300 420 360" />
        <path d="M110 330 C200 270 330 270 440 330" />
        <path d="M120 300 C210 248 330 248 430 300" />
        <path d="M140 270 C220 226 320 226 410 270" />
        <path d="M160 242 C230 206 310 206 390 242" />
        <path d="M185 216 C240 190 300 190 360 216" />
      </g>

      {/* Coastline highlight */}
      <path d={australia} fill="none" stroke="#bfdbfe" strokeWidth="2" opacity="0.6" />

      {/* Location marker (east coast, ~Sydney) — emerald accent pin */}
      <g>
        <circle cx="430" cy="300" r="26" fill="#16a34a" opacity="0.16" />
        <path
          d="M430 274 c-12 0 -22 10 -22 22 c0 16 22 36 22 36 s22 -20 22 -36 c0 -12 -10 -22 -22 -22 Z"
          fill="#16a34a"
        />
        <circle cx="430" cy="296" r="8" fill="#ffffff" />
      </g>
    </svg>
  )
}
