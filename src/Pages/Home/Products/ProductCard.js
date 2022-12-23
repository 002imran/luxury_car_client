import React from 'react';

const ProductCard = ({product}) => {
    const { img, id, price, pdroduct_name} = product;
    return (
      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <div className="m-5">
          <figure className="px-10 pt-10 bg-slate-200">
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold text-gray-800">
            {pdroduct_name}
          </h2>
          <p className="text-lg font-semibold text-orange-600">${price}.00</p>
        </div>
      </div>
    );
};

export default ProductCard;