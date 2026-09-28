import fs from 'node:fs'
import path from 'node:path'
import { imageSize } from 'image-size'
import type { ImageInput, ProjectImage } from '@/content/types'

/** Adds intrinsic width/height read from the file under /public. */
export function sized<T extends ImageInput>(image: T): T & ProjectImage {
  const { width, height } = imageSize(fs.readFileSync(path.join(process.cwd(), 'public', image.src)))
  return { ...image, width, height }
}
