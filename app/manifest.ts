import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bluora Premium Water',
        short_name: 'Bluora',
        description: 'Experience the purity of Bluora. Premium alkaline packaged drinking water.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#06b6d4',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
