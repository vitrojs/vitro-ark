/// <reference types="bun-types" />

import { buildSync } from 'esbuild'
import pkg from './package.json' assert { type: 'json' }
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as url from 'node:url'


const dirname = path.dirname(url.fileURLToPath(import.meta.url))
const dist = path.join(dirname, 'dist')
if (fs.existsSync(dist)) {
  if (Bun.env.NODE_ENV === 'production') process.exit(0)
  console.log(`🧹 Cleaning dist folder...`)
  fs.rmSync(dist, { recursive: true, force: true })
}

buildSync({
  entryPoints: {
    // -------------------------------------------
    avatar: './src/avatar/index.ts',
    carousel: './src/carousel/index.ts',
    checkbox: './src/checkbox/index.ts',
    'color-picker': './src/color-picker/index.ts',
    combobox: './src/combobox/index.ts',
    'date-picker': './src/date-picker/index.ts',
    dialog: './src/dialog/index.ts',
    editable: './src/editable/index.ts',
    environment: './src/environment/index.ts',
    'file-upload': './src/file-upload/index.ts',
    'hover-card': './src/hover-card/index.ts',
    menu: './src/menu/index.ts',
    'number-input': './src/number-input/index.ts',
    pagination: './src/pagination/index.ts',
    'pin-input': './src/pin-input/index.ts',
    popover: './src/popover/index.ts',
    presence: './src/presence/index.ts',
    'radio-group': './src/radio-group/index.ts',
    'rating-group': './src/rating-group/index.ts',
    'segment-group': './src/segment-group/index.ts',
    select: './src/select/index.ts',
    slider: './src/slider/index.ts',
    splitter: './src/splitter/index.ts',
    switch: './src/switch/index.ts',
    tabs: './src/tabs/index.ts',
    'tags-input': './src/tags-input/index.ts',
    toast: './src/toast/index.ts',
    'toggle-group': './src/toggle-group/index.ts',
    tooltip: './src/tooltip/index.ts',
  },
  format: 'esm',
  outdir: 'dist',
  bundle: true,
  splitting: true,
  platform: 'browser',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
})

console.log('✅ Build done!')
