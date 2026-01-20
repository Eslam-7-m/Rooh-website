import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Card from '../../components/card/Card';
import { Search, SlidersHorizontal } from 'lucide-react';

const AllProducts = () => {
  // سحب البيانات والتحكم من الـ Context
  const {
    filteredProducts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  } = useContext(ProductContext);

  const categories = ['All', 'Woody', 'Oriental', 'Floral'];

  return (
    <div className='bg-[#0a0a0a] min-h-screen pt-28 pb-20 px-6'>
      <div className='container mx-auto'>
        {/* --- Header Section --- */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-16 gap-8'>
          <div className='text-center md:text-left'>
            <h1 className='text-white text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4'>
              The Collection
            </h1>
            <p className='text-gray-500 font-light tracking-widest italic'>
              استكشف روحك من خلال عطورنا
            </p>
          </div>

          {/* Search Box */}
          <div className='relative w-full md:w-96 group'>
            <Search
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors'
              size={20}
            />
            <input
              type='text'
              placeholder='Search for your scent...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full bg-maincolor border border-white/5 py-4 pl-12 pr-6 rounded-2xl text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600 font-light'
            />
          </div>
        </div>

        {/* --- Filter Tabs --- */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'text-gray-400 border-white/10 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Products Grid --- */}
        {filteredProducts.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filteredProducts.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <p className='text-gray-600 text-lg font-light tracking-widest'>
              لم نجد عطلاً يطابق بحثك.. جرب كلمة أخرى
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
