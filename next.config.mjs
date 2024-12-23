/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/personal-website" : "",
    images: {
        unoptimized: true,
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
