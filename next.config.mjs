/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
},
eslint:{
    ignoreDuringBuilds: true
},
    rewrites: async () => {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.assemblyai.com/lemur/v3/generate/task',
          },
        ];
      },
};

export default nextConfig;
