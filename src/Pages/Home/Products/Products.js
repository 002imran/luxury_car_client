import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))

    },[])
    

    return (
      <div>
        <div className="text-center my-5 mb-6">
          <p className="text-lg text-orange-600 font-bold pt-5">
            Popular Products
          </p>
          <h1 className="text-4xl font-bold">Browse Our Products</h1>
          <p className="py-6">
            The majority have suffered alteration in some form, by injected<br />
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
            {
                products.map(product=>
                    <ProductCard key={product.id} 
                                 product={product}
                    ></ProductCard>
                )
            }
         </div>
      </div>
    );
};

export default Products;