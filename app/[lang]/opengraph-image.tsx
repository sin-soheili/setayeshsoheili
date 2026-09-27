import { ImageResponse } from 'next/og'
import { langParams } from '@/lib/params'

export const dynamic = 'force-static'
export const generateStaticParams = langParams
export const alt = 'Setayesh Soheili — Software Engineer, Gorgan, Iran'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const bg = '#fafafa'
const panel = '#ffffff'
const fg = '#18181b'
const muted = '#71717a'
const line = '#e4e4e7'

// Latin-only on purpose: the OG renderer can't shape Persian script.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: bg, padding: 48 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: panel,
            border: `2px solid ${line}`,
            borderRadius: 0,
            padding: '52px 60px',
            color: fg,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 26, fontWeight: 600 }}>
            <div style={{ width: 34, height: 34, display: 'flex', position: 'relative', background: fg, borderRadius: 7 }}>
              <div style={{ position: 'absolute', left: 7, top: 7, width: 10, height: 10, background: bg }} />
              <div style={{ position: 'absolute', left: 17, top: 17, width: 10, height: 10, background: bg }} />
            </div>
            setayesh-soheili.ir
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 20, letterSpacing: 4, color: muted }}>SOFTWARE ENGINEER // GORGAN, IRAN</div>
            <div style={{ marginTop: 18, fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Setayesh Soheili</div>
            <div style={{ marginTop: 22, fontSize: 30, color: muted }}>Python · Backend · Bots · Automation · Web</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `2px solid ${line}`, paddingTop: 22, fontSize: 20, letterSpacing: 3, color: muted }}>
            <span>WORK // WRITING // RESUME</span>
            <span>FA / EN</span>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
