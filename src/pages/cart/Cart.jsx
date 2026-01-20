import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, sendWhatsAppOrder } =
    useContext(ProductContext);

  // حالة السلة فارغة
  if (cart.length === 0) {
    return (
      <div className='min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white px-6'>
        <div className='relative mb-8'>
          <ShoppingBag size={100} className='text-white/5' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <ShoppingBag size={40} className='text-blue-500 animate-pulse' />
          </div>
        </div>
        <h2 className='text-2xl font-light tracking-[0.2em] uppercase mb-6'>
          سلة المشتريات فارغة
        </h2>
        <Link
          to='/allproducts'
          className='flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500'
        >
          <ArrowLeft size={14} /> استكشف المجموعة
        </Link>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex flex-col lg:flex-row gap-16'>
          {/* قسم المنتجات المختارة */}
          <div className='flex-1'>
            <h1 className='text-3xl font-light tracking-[0.3em] uppercase mb-10 border-b border-white/5 pb-6'>
              Your Cart
              <br className='md:hidden' />
              <span className='text-sm text-gray-500 ml-2'>
                ({cart.length} items)
              </span>
            </h1>

            <div className='space-y-6'>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center gap-6 bg-maincolor/50 p-6 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all'
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-24 h-32 object-cover rounded-[1.5rem]'
                  />

                  <div className='flex-1'>
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className='text-xl font-light tracking-tight'>
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-gray-600 hover:text-red-500 transition-colors p-1'
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className='text-gray-500 text-xs uppercase tracking-widest mb-6'>
                      {item.category}
                    </p>

                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-4 bg-black/40 rounded-full px-4 py-2 border border-white/5'>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className='hover:text-blue-500 transition-colors'
                        >
                          <Minus size={14} />
                        </button>
                        <span className='text-sm w-4 text-center'>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className='hover:text-blue-500 transition-colors'
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className='text-lg font-medium text-blue-400'>
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ملخص الطلب والـ Checkout */}
          <div className='w-full lg:w-96'>
            <div className='bg-maincolor p-8 rounded-[2.5rem] border border-white/5 sticky top-32'>
              <h3 className='text-xl font-light tracking-widest uppercase mb-8'>
                Summary
              </h3>

              <div className='space-y-4 mb-8 text-sm'>
                <div className='flex justify-between text-gray-500'>
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                {/* <div className='flex justify-between text-gray-500'>
                  <span>Shipping</span>
                  <span className='text-green-500 uppercase text-[10px] font-bold tracking-widest'>
                    Free
                  </span>
                </div> */}
                <div className='h-[1px] bg-white/5 my-4'></div>
                <div className='flex justify-between text-xl font-light'>
                  <span>Total</span>
                  <span className='text-white'>${cartTotal}</span>
                </div>
              </div>

              <button
                onClick={sendWhatsAppOrder}
                className='w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-[0_10px_30px_rgba(59,130,246,0.2)] active:scale-95'
              >
                Order via WhatsApp
              </button>

              <p className='text-[10px] text-gray-600 text-center mt-6 leading-relaxed uppercase tracking-widest'>
                سيتم توجيهك للمحادثة المباشرة <br /> لتأكيد بيانات الشحن
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
