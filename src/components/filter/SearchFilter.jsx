import React, { useContext } from 'react';
import { Search, X } from 'lucide-react';
import { ProductContext } from '../../context/ProductContext';

const SearchFilter = () => {
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } =
    useContext(ProductContext);

  const categories = ['All', 'Woody', 'Oriental', 'Floral', 'Musk'];

  return (
    <div className='space-y-8 mb-12'>
      {/* 1. حقل البحث الذكي */}
      <div className='relative max-w-2xl mx-auto group'>
        <Search
          className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors duration-300'
          size={20}
        />
        <input
          type='text'
          placeholder='ابحث عن رائحتك الخاصة...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full bg-maincolor border border-white/5 py-5 pl-12 pr-12 rounded-2xl text-white outline-none focus:border-blue-500/40 transition-all placeholder:text-gray-600 font-light tracking-wide'
        />
        {/* زرار مسح البحث يظهر فقط عند الكتابة */}
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors'
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* 2. تبويبات التصنيفات (Category Tabs) */}
      <div className='flex flex-wrap justify-center items-center gap-3'>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
   relative px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500
   ${
     selectedCategory === cat
       ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]'
       : 'bg-transparent text-gray-500 border border-white/5 hover:border-white/20 hover:text-white'
   }
  `}
          >
            {cat}
            {/* نقطة مضيئة تحت القسم المختار */}
            {selectedCategory === cat && (
              <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse'></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
