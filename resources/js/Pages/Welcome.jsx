import Header from '@/Components/Header';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <main className="min-h-screen">
            <Head title="Home" />
            <Header />

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolor iste iure, magnam necessitatibus blanditiis quis saepe odit nemo provident sint dolore est asperiores harum qui? Consectetur quaerat dolores iure?</p>
        </main>
    );
}
