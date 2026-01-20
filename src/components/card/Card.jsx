import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Card = ({ product }) => {
  // سحب دالة الإضافة من الـ Context
  const { addToCart } = useContext(ProductContext);

  return (
    <div className='group bg-[#121212] rounded-[2rem] p-4 border border-white/5 hover:border-blue-500/30 transition-all duration-500'>
      {/* حاوية الصورة */}
      <div className='relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#1a1a1a]'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />

        {/* Tag بسيط للمنتجات المميزة */}
        <div className='absolute top-3 left-3 bg-blue-600/80 backdrop-blur-sm text-[10px] text-white px-3 py-1 rounded-full tracking-widest uppercase font-bold'>
          {product.category}
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className='mt-5 px-2'>
        <div className='flex justify-between items-start mb-1'>
          <h3 className='text-white text-lg font-light tracking-tight group-hover:text-blue-400 transition-colors'>
            {product.name}
          </h3>
          <span className='text-blue-500 font-medium'>${product.price}</span>
        </div>

        <p className='text-gray-500 text-xs font-light mb-1 uppercase tracking-[0.2em]'>
          {product.sexual}
        </p>
        <p className='text-gray-500 text-xs font-light mb-1 uppercase tracking-[0.2em]'>
          {product.size}
        </p>
        <p className='text-gray-500 text-xs font-light mb-2 uppercase tracking-[0.2em]'>
          Premium Essence
        </p>

        {/* زرار الإضافة السريع */}
        <button
          onClick={() => addToCart(product)}
          className='w-full py-3 bg-transparent border border-white/10 rounded-xl text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-300 active:scale-95'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
