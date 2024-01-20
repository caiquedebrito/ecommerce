import Header from '@/Components/Header';
import { Link, Head } from '@inertiajs/react';
import Bolo from "../assets/bolo.jpg"
import PrimaryButton from '@/Components/PrimaryButton';
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <main className="min-h-screen">
            <Head title="Home" />
            <Header />

            <div className="p-5 flex flex-wrap gap-2 justify-center"> 
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

            <Footer />
        </main>
    );
}
