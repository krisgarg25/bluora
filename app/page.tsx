import { Metadata } from 'next';
import HomeClient from '../components/HomeClient';

export const metadata: Metadata = {
    title: "Bluora | The Power of Pure - Premium Alkaline Water",
    description: "Experience the purity of Bluora. Premium alkaline packaged drinking water sourced from pristine environments. Hydrate with the power of pure life.",
    keywords: ["Premium Water", "Alkaline Water", "Bluora", "Luxury Water", "Hydration"],
    openGraph: {
        title: "Bluora | The Power of Pure - Premium Alkaline Water",
        description: "Experience the purity of Bluora. Premium alkaline packaged drinking water.",
    },
};

export default function BluoraLandingVideo() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Bluora Premium Alkaline Water",
        "image": [
            "/bgn/ezgif-frame-001.jpg" // Ensure this or another representative image is available
        ],
        "description": "Premium alkaline packaged drinking water sourced from pristine environments.",
        "brand": {
            "@type": "Brand",
            "name": "Bluora"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "HD DRINKS & BEVERAGES",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Arazi No. 453, Sachendi",
                "addressLocality": "Kanpur Nagar",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "209304",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomeClient />
        </>
    );
}
