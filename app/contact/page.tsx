import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';

export const metadata: Metadata = {
    title: 'Contact Us | Bluora - Premium Alkaline Water',
    description: 'Get in touch with Bluora. Contact us for inquiries about our premium alkaline water products, distribution, or partnership opportunities.',
    keywords: ['Contact Bluora', 'Water Delivery', 'Customer Service', 'HD Drinks & Beverages'],
};

export default function ContactPage() {
    return <ContactClient />;
}
