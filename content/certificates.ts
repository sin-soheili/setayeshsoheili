import type { Certificate } from './types'

// null (or []) hides the Certificates block. Example entry:
// {
//   title: { fa: 'عنوان گواهی‌نامه', en: 'Certificate title' },
//   issuer: 'Issuer',
//   year: '2025',
//   href: 'https://…',
// },
export const certificates: Certificate[] | null = null
