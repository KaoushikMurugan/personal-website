/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/KaoushikMurugan/**',
            },
            {
                protocol: 'https',
                hostname: 'cube.rider.biz',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
