{
  import("next").NextConfig;
}
const nextConfig = {
  images: {
    domains: ["www.flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
