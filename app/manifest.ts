import { MetadataRoute } from 'next/types';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StreamVibe",
    short_name: "StreamVibe",
    description: "StreamVibe - Your ultimate streaming platform for movies and series.",
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    start_url: "/",
    scope: "/",
    orientation: "portrait-primary",
    lang: "en-US",
    icons: [
      {
        src: "/assets/brand/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/brand/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  };
}
