/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cosmos45.github.io'
            }
        ]
    }
};

export default nextConfig;
