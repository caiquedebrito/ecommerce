import Header from '@/Components/Header';
import { Link, Head } from '@inertiajs/react';
import Bolo from "../assets/bolo.jpg"
import PrimaryButton from '@/Components/PrimaryButton';
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home({ auth, laravelVersion, phpVersion }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Head title="Home" />
            <Header auth={auth}/>

            <div className="p-5 flex flex-wrap gap-2 justify-center"> 
                { products.map((product, index) => <ProductCard key={index} product={product} />) }

            </div>

            <Footer />
        </main>
    );
}
