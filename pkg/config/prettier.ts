import path from 'path'
import { type Config } from 'prettier'

export default {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    path.join(
      import.meta.dirname,
      'node_modules/prettier-plugin-tailwindcss/dist/index.mjs'
    )
  ]
} as Config
