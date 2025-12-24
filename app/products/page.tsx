import { Metadata } from 'next';
import ProductsClient from '../../components/ProductsClient';

export const metadata: Metadata = {
    title: 'Our Products | Bluora - Premium Alkaline Water',
    description: 'Explore Bluora\'s collection of premium alkaline water products available in various sizes: 250ml, 500ml, and 1L. Experience the perfect hydration for every lifestyle.',
    keywords: ['Bluora Products', 'Water Bottle Sizes', 'Buy Alkaline Water', 'Premium Water'],
};

export default function ProductsPage() {
    return <ProductsClient />;
}
