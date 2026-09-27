import { ImageResponse } from 'next/og'

/** Raster version of app/icon.svg. */
export function brandMark(size: number, { maskable = false } = {}) {
  const u = size / 32
  // Maskable icons need their content inside the central safe zone.
  const inset = maskable ? 0.1 : 0
  const s = (n: number) => (inset * 32 + n * (1 - inset * 2)) * u
  const sq = (n: number) => n * (1 - inset * 2) * u

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#18181b', borderRadius: maskable ? 0 : 7 * u }}>
        <div style={{ position: 'absolute', left: s(7), top: s(7), width: sq(9), height: sq(9), background: '#fafafa' }} />
        <div style={{ position: 'absolute', left: s(16), top: s(16), width: sq(9), height: sq(9), background: '#fafafa' }} />
      </div>
    ),
    { width: size, height: size },
  )
}
