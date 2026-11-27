import { Linter } from 'eslint'
import base from './eslint'

export default [
  ...base,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      // https://typescript-eslint.io/rules/no-restricted-imports
      // '@typescript-eslint/no-restricted-imports': ['error', {}]
    }
  }
] satisfies Linter.Config[]
