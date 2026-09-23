import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export statique obligatoire pour GitHub Pages
  output: 'export',

  // GitHub Pages ne supporte pas l'optimisation d'images Next.js
  images: {
    unoptimized: true,
  },

  // Support MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
