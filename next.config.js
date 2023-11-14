const nextConfig = {
  cleanDistDir: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/ez-wallet-implementation-sample'
      }
    ]
  },
  // Docs => https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
module.exports = nextConfig
