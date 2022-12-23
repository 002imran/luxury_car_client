import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, prev, next, id} = slide;
    return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={image} className="w-full rounded-xl" alt="" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h2 className="text-white text-6xl font-bold">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h2>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <p className="text-white text-xl">
            <button className="btn btn-warning mr-5">Warning</button>
            <button className="btn btn-outline btn-warning">Warning</button>
          </p>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-white text-xl">
            There Are Many Variations Of Passages Of Available, But The Majority
            Have Suffered Alteration In Some Form
          </p>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;