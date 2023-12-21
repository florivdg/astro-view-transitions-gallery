/** @type {import("prettier").Config} */
export default {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
}
