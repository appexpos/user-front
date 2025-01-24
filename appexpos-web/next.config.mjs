/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeimg.pl",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/", // 旧的 URL
        destination: "/explore/ios/apps", // 新的 URL
        permanent: true, // 设置为 true 会执行 301 重定向，false 会执行 302 重定向
      },
    ];
  },
};

export default nextConfig;
