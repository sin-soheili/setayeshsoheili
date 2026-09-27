import type { NextConfig } from 'next'

// Static export + build-time image optimization (next-image-export-optimizer):
// `npm run build` renders the site, then writes responsive WebP variants of /public/images into out/.
const config: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    imageSizes: [64, 128, 256, 384],
    deviceSizes: [640, 828, 1080, 1280, 1920],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '80',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'optimized',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
}

export default config
