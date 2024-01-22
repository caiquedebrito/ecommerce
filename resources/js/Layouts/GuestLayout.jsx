import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            <Header />

            {/* <div className="w-full flex flex-col justify-center items-center bg-white shadow-md overflow-hidden sm:rounded-lg"> */}
                {children}
            {/* </div> */}
            <Footer />
        </div>
    );
}
