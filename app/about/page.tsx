import { Metadata } from 'next';
import AboutClient from '../../components/AboutClient';

export const metadata: Metadata = {
    title: 'About Us | Bluora - HD Drinks & Beverages',
    description: 'Learn about HD Drinks & Beverages (HD Group) and our flagship brand Bluora. We focus on hygiene, process discipline, and consistent quality for institutional supply.',
    keywords: ['About Bluora', 'HD Group', 'HD Drinks & Beverages', 'Water Manufacturer', 'Institutional Water Supply'],
    openGraph: {
        title: 'About HD Drinks & Beverages - Bluora',
        description: 'Quality-focused beverage manufacturing and supply operating with strict hygiene and discipline.',
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
