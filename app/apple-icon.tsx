import { brandMark } from '@/lib/brand-mark'

export const dynamic = 'force-static'
export const size ={ width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return brandMark(180, { maskable: true })
}
