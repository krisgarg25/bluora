import { Metadata } from 'next';
import PressClient from '../../components/PressClient';

export const metadata: Metadata = {
    title: 'Media Kit & Press Resources | Bluora',
    description: 'Official brand assets, logos, and company information for Bluora Premium Alkaline Water. Download resources for media coverage.',
    keywords: ['Bluora Media Kit', 'Press Resources', 'Brand Assets', 'Bluora Logo', 'Alkaline Water Press'],
    openGraph: {
        title: 'Bluora Media Kit',
        description: 'Download official brand assets and resources for Bluora.',
    }
};

export default function PressPage() {
    return <PressClient />;
}
