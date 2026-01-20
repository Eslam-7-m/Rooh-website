import React, { useContext } from 'react'; // 1. استيراد useContext
import roohlogo from '../../assets/images/blacklogo.png';
import handman from '../../assets/images/2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import Card from '../../components/card/Card';
import { ProductContext } from '../../context/ProductContext'; // 2. استيراد الكونتكست

export default function Home() {
  // 3. سحب المنتجات من الـ Context
  const { products } = useContext(ProductContext);

  return (
    <>
      {/* Hero Section */}
      <div className='bg-black md:h-screen overflow-hidden '>
        <div className='md:grid md:grid-cols-2  container mx-auto h-full'>
          {/* col-1: Logo */}
          <div className='flex flex-col justify-center items-center '>
            <img
              src={roohlogo}
              alt='Rooh Logo'
              className='hover:scale-105 transition-all duration-500   md:object-contain' // w3/4,,,,,,,,,,,,,,,,,,,,,,,
            />
          </div>
          {/* col-2: Image */}
          <div className=''>
            <img
              src={handman}
              alt='Featured Perfume'
              className=' md:object-cover'
            />
          </div>
        </div>
      </div>

      {/* Section-2: Swiper Products */}
      <div className='min-h-screen bg-black py-20'>
        <div className='container mx-auto text-white px-6'>
          <h3 className='text-4xl font-light tracking-[0.3em] uppercase mb-12 text-center md:text-left'>
            Discover Your Fragrance
          </h3>

          <div className='relative '>
            {' '}
            {/* الـ padding ده عشان يبعد الأسهم عن الكاردات */}
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // من 768px (تابلت) وطالع
                768: {
                  slidesPerView: 2,
                  navigation: true, // تفعيل الـ navigation برمجياً
                },
                // من 1024px (لابتوب) وطالع
                1024: {
                  slidesPerView: 3,
                  navigation: true,
                },
              }}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className='mySwiper '
            >
              {/* 4. عمل Map على المنتجات بدلاً من تكرار الكارد يدوياً */}
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
