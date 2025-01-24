import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  /* config options here */ 
  images: {
    domains: ['image.tmdb.org'],
  },
  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/tmdb/:path*',
        destination: 'https://api.themoviedb.org/:path*',
      },
    ];
  },
}

export default nextConfig;
