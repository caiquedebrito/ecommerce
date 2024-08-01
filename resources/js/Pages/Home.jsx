import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';
import { useEffect, useState } from 'react';
import Carousel from '@/Components/Carousel';


export default function Home({ auth, products, categories }) {

    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Head title="Home" />
            <Header auth={auth} categories={categories}/>

            {/* <Carousel /> */}

            <div className="flex flex-col px-5 gap-5 justify-center">
                { products.map((product, index) => <ProductCard key={index} product={product} />) }
                {
                  // categories.map(category => {
                  //   return (
                  //     <div className='overflow-scroll no-scroll'>
                  //       <h2 className='text-xl font-bold capitalize mb-2 text-blue-600'>{category}</h2>
                  //       <div className="flex gap-2 justify-between">
                  //         {/* {products[category].map((product, index) => <ProductCard key={index} product={product} />)} */}
                  //       </div>
                  //     </div>
                  //   );
                  //   {products[category].map((product, index) => <ProductCard key={index} product={product} />)}
                  //   {products[category].map((product, index) => <ProductCard key={index} product={product} />)}
                  //         {products[category].map((product, index) => <ProductCard key={index} product={product} />)}
                  //         {products[category].map((product, index) => <ProductCard key={index} product={product} />)}
                  // })
                }
            </div>

            <Footer />
        </main>
    );
}
