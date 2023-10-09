/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'wisteria.vn',

            },
          ],
    }
}

module.exports = nextConfig
