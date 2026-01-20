import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa'; // ستحتاج لتثبيت react-icons

const Footer = () => {
  return (
    <footer className='bg-black text-white border-t border-gray-900 pt-12 pb-8 relative z-10'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8'>
          {/* Brand Section */}
          <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold tracking-[0.3em] mb-2'>ROOH</h2>
            <p className='text-gray-500 text-sm max-w-xs'>
              Luxury perfumes crafted for those who seek elegance and soul in
              every scent.
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h3 className='text-sm uppercase tracking-widest text-gray-400 mb-2'>
              Links
            </h3>
            <NavLink
              to='/home'
              className='text-gray-500 hover:text-white transition-colors'
            >
              Home
            </NavLink>
            <NavLink
              to='/allproducts'
              className='text-gray-500 hover:text-white transition-colors'
            >
              Shop All
            </NavLink>
            <NavLink
              to='/cart'
              className='text-gray-500 hover:text-white transition-colors'
            >
              Your Cart
            </NavLink>
          </div>

          {/* Social Media */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h3 className='text-sm uppercase tracking-widest text-gray-400 mb-2'>
              Connect
            </h3>
            <div className='flex gap-6'>
              {/* instagram */}
              <a
                href='https://www.instagram.com/rooh_.eg?igsh=MW8xdHpjYnprbmVmdw=='
                target='_blank'
                className='text-gray-500 hover:text-white transition-transform hover:scale-110'
              >
                <FaInstagram size={20} />
              </a>
              {/* face */}
              <a
                href='https://www.facebook.com/share/1AVRKoyD71/'
                target='_blank'
                className='text-gray-500 hover:text-white transition-transform hover:scale-110'
              >
                <FaFacebookF size={20} />
              </a>
              {/* whatsapp */}
              <a
                href='https://wa.me/201121885893'
                target='_blank'
                className='text-gray-500 hover:text-white transition-transform hover:scale-110'
              >
                <FaWhatsapp size={20} />
              </a>
              {/* tiktok */}
              <a
                href='https://www.tiktok.com/@rooh_.eg?_t=ZS-901dbgMNYxM&_r=1'
                target='_blank'
                className='text-gray-500 hover:text-white transition-transform hover:scale-110'
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className='mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600 tracking-widest'>
          © {new Date().getFullYear()} ROOH PERFUMES. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
