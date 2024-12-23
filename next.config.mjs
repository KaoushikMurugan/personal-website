/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "",
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
