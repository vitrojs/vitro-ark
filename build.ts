/// <reference types="bun-types" />

import { buildSync } from 'esbuild'
import * as fs from 'node:fs'
import * as path from 'node:path'
import pkg from './package.json' assert { type: 'json' }

const isProduction = Bun.env.NODE_ENV === 'production'

const dist = path.join(import.meta.dir, 'dist')

if (fs.existsSync(dist)) {
  if (Bun.env.NODE_ENV === 'production') process.exit(0)
  console.log(`🧹 Cleaning dist folder...`)
  fs.rmSync(dist, { recursive: true, force: true })
}

const exclude = new Set(['environment'])

const components = fs
  .readdirSync('./src')
  .filter((it) => !exclude.has(it) && fs.statSync(`./src/${it}`).isDirectory())

const entrypoints = components.reduce(
  (acc, it) => {
    acc[it] = `./src/${it}/index.ts`
    return acc
  },
  {} as Record<string, string>,
)

if (isProduction) {
  const exports = components.reduce(
    (acc, it) => {
      acc[`./${it}`] = {
        import: `./dist/${it}.js`,
        types: `./src/${it}/index.ts`,
      }
      return acc
    },
    {} as Record<string, any>,
  )

  // @ts-ignore
  pkg['exports'] = exports

  fs.writeFileSync(
    path.join(import.meta.dir, 'package.json'),
    JSON.stringify(pkg, null, 2),
  )
}

buildSync({
  entryPoints: {
    ...entrypoints,
  },
  format: 'esm',
  outdir: 'dist',
  bundle: true,
  splitting: true,
  platform: 'browser',
  external: [
    'styled-system',
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
})

console.log('✅ Build done!')
