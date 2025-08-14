/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "backend-secure.quyosh-panellari.uz",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
