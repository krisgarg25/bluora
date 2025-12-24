import { Metadata } from 'next';
import CalculatorClient from '../../../components/CalculatorClient';

export const metadata: Metadata = {
    title: 'Daily Water Intake Calculator | Bluora',
    description: 'Calculate exactly how much water you need to drink daily based on your weight, activity level, and climate. Free hydration tool by Bluora.',
    keywords: ['water intake calculator', 'hydration calculator', 'daily water needs', 'how much water to drink'],
    openGraph: {
        title: 'How much water do you really need? Calculate now.',
        description: 'Use the free Bluora Hydration Calculator to find your optimal daily water intake.',
        images: ['/og-image.jpg'], // Ideally a specific image for the calculator
    }
};

export default function HydrationCalculatorPage() {
    return <CalculatorClient />;
}
