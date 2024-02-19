import Header from '@/Components/Header';
import { Link, Head } from '@inertiajs/react';
import Bolo from "../assets/bolo.jpg"
import PrimaryButton from '@/Components/PrimaryButton';
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '@/Components/Carousel';

export default function Home({ auth }) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('/products/home')
      .then(response => {
        setProducts(response.data)
        setCategories(Object.keys(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Head title="Home" />
            <Header auth={auth}/>

            <Carousel />

            <div className="flex flex-col px-5 gap-5 justify-center">
                {/* { products.map((product, index) => <ProductCard key={index} product={product} />) } */}
                {
                  categories.map(category => {
                    return (
                      <div className='overflow-scroll no-scroll'>
                        <h2 className='text-xl font-bold capitalize mb-2 text-blue-600'>{category}</h2>
                        <div className="flex gap-2 justify-between">
                          {products[category].map((product, index) => <ProductCard key={index} product={product} />)}
                        </div>
                      </div>
                    );
                  })
                }
            </div>

            <Footer />
        </main>
    );
}
