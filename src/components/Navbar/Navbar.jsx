import { Facebook, Instagram, ShoppingCart, Menu, X } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const { cart } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ستايل اللينك النشط (نفس ألوانك)
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? 'text-blue-500 transition-all font-bold'
      : 'text-white hover:text-blue-400 transition-all font-medium';

  return (
    <nav className='bg-maincolor text-white sticky top-0 z-[100] backdrop-blur-md bg-opacity-90 border-b border-white/5'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/* 1. Logo */}
        <NavLink to={'/home'} className='z-[110]'>
          <h1 className='font-bold text-2xl md:text-3xl tracking-tighter'>
            ROOH
          </h1>
        </NavLink>

        {/* 2. Desktop Navigation (تختفي في الموبايل) */}
        <ul className='hidden md:flex items-center gap-10 '>
          <NavLink to={'/home'} className={navLinkStyles}>
            <li className='text-sm uppercase tracking-widest'>Home</li>
          </NavLink>
          <NavLink to={'/allproducts'} className={navLinkStyles}>
            <li className='text-sm uppercase tracking-widest '>All Products</li>
          </NavLink>
        </ul>

        {/* 3. Actions (Cart & Socials/Menu) */}
        <div className='flex items-center gap-5'>
          {/* أيقونة السلة - ظاهرة دايماً (Mobile & Desktop) */}
          <NavLink to={'/cart'} className='relative cursor-pointer group'>
            <ShoppingCart
              className='text-white group-hover:text-blue-500 transition-all duration-300'
              size={22}
            />
            {cart.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce font-bold'>
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* أيقونات السوشيال ميديا (تظهر في الديسكتوب فقط) */}
          <div className='hidden md:flex items-center gap-5 border-l border-white/20 pl-5'>
            <a
              href='https://www.instagram.com/rooh_.eg'
              target='_blank'
              rel='noreferrer'
            >
              <Instagram
                size={20}
                className='hover:text-pink-600 transition-all'
              />
            </a>
            <a
              href='https://wa.me/201121885893'
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsapp
                size={20}
                className='hover:text-green-600 transition-all'
              />
            </a>
            <a
              href='https://www.facebook.com/share/1AVRKoyD71/'
              target='_blank'
              rel='noreferrer'
            >
              <Facebook
                size={20}
                className='hover:text-blue-600 transition-all'
              />
            </a>
            <a
              href='https://www.tiktok.com/@rooh_.eg'
              target='_blank'
              rel='noreferrer'
            >
              <FaTiktok
                size={20}
                className='hover:text-blue-400 transition-all'
              />
            </a>
          </div>

          {/* زرار القائمة للموبايل (يظهر في الموبايل فقط) */}
          <button className='md:hidden text-white z-[110]' onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay (القائمة الجانبية للموبايل) */}
      <div
        className={`fixed inset-0 bg-maincolor z-[105] flex flex-col items-center justify-center gap-10 transition-all duration-500 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'} md:hidden`}
      >
        {/* روابط الصفحات في المنيو */}
        <ul className='flex flex-col items-center gap-8'>
          <NavLink
            to='/home'
            onClick={toggleMenu}
            className='text-xl uppercase tracking-widest text-white hover:text-blue-500'
          >
            Home
          </NavLink>
          <NavLink
            to='/allproducts'
            onClick={toggleMenu}
            className='text-xl uppercase tracking-widest text-white hover:text-blue-500 mt-10'
          >
            All Products
          </NavLink>
        </ul>

        {/* أيقونات السوشيال ميديا (مدمجة داخل المنيو في الموبايل) */}
        <div className='flex gap-8 border-t border-white/10 pt-10 w-2/3 justify-center'>
          <a
            href='https://www.instagram.com/rooh_.eg'
            target='_blank'
            rel='noreferrer'
            onClick={toggleMenu}
          >
            <Instagram size={24} className='text-white hover:text-pink-600' />
          </a>
          <a
            href='https://wa.me/201121885893'
            target='_blank'
            rel='noreferrer'
            onClick={toggleMenu}
          >
            <FaWhatsapp size={24} className='text-white hover:text-green-600' />
          </a>
          <a
            href='https://www.facebook.com/share/1AVRKoyD71/'
            target='_blank'
            rel='noreferrer'
            onClick={toggleMenu}
          >
            <Facebook size={24} className='text-white hover:text-blue-600' />
          </a>
          <a
            href='https://www.tiktok.com/@rooh_.eg'
            target='_blank'
            rel='noreferrer'
            onClick={toggleMenu}
          >
            <FaTiktok size={24} className='text-white hover:text-blue-400' />
          </a>
        </div>
      </div>
    </nav>
  );
}
