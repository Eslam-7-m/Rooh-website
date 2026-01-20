import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import TextCursor from '../TextCursor/TextCursor';

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-black relative'>
      {/* 2. وضع المكون هنا ليعمل في كل الموقع */}
      <TextCursor
        text='ROOH' // تقدر تغير الكلمة اللي بتمشي ورا الماوس هنا
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />

      <Navbar />

      <main className='flex-grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
