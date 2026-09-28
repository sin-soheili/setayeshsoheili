import type { Certificate } from './types'

// null (or []) hides the Certificates block. `image` is the preview (a PNG of the PDF's first page
// in public/images/certificates, e.g. `pdftoppm -png -r 110 -singlefile x.pdf out`); `file` is the PDF in public/.
export const certificates: Certificate[] | null = [
  {
    title: { fa: 'CS50x — مقدمه‌ای بر علوم کامپیوتر', en: "CS50x — CS50's Introduction to Computer Science" },
    issuer: 'Harvard University — CS50',
    year: '2025',
    href: 'https://cs50.harvard.edu/certificates/3eff7309-50b0-4ff8-b2a9-d45a826797af',
    file: '/CS50x.pdf',
    image: { src: '/images/certificates/cs50x.png', alt: { fa: 'گواهی‌نامه‌ی CS50x', en: 'CS50x certificate' } },
  },
  {
    title: { fa: 'CS50P — مقدمه‌ای بر برنامه‌نویسی با پایتون', en: "CS50P — CS50's Introduction to Programming with Python" },
    issuer: 'Harvard University — CS50',
    year: '2025',
    href: 'https://cs50.harvard.edu/certificates/a858ca26-137c-47f4-b5ca-4a1f435035f0',
    file: '/CS50P.pdf',
    image: { src: '/images/certificates/cs50p.png', alt: { fa: 'گواهی‌نامه‌ی CS50P', en: 'CS50P certificate' } },
  },
]
