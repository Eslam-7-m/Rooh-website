import React, { createContext, useState, useMemo } from 'react';
import imgman from '../assets/images/imgman.png';
import imgwomen from '../assets/images/imgwomen.png';
import handwomen from '../assets/images/1.png';
import handman from '../assets/images/2.png';
import unisex from '../assets/images/imgunisex.png';

// 1. إنشاء الكونتكست
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // 2. مصفوفة المنتجات (الداتا الأساسية لبراند روح)
  const [products] = useState([
    {
      id: 1,
      name: 'رالف لورين',
      category: 'Woody',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgwomen,
    },
    {
      id: 2,
      name: 'كول واتر بروو',
      category: 'Aquatic',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 3,
      name: 'ميد نايت',
      category: 'Floral',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 4,
      name: 'سكاندل',
      category: 'Sweet',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: imgwomen,
    },
    {
      id: 5,
      name: 'اوليمبيا',
      category: 'Oriental',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 6,
      name: 'مون سباركل',
      category: 'Fruity',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: imgwomen,
    },
    {
      id: 7,
      name: 'بلاك ليكسز',
      category: 'Aromatic',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 8,
      name: 'يارا كاندي',
      category: 'Sweet',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 9,
      name: 'وايلد مدغشقر',
      category: 'Vanilla',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: imgwomen,
    },
    {
      id: 10,
      name: 'بلاك ليكسز',
      category: 'Aromatic',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 11,
      name: 'هوجو بوص',
      category: 'Fresh',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 12,
      name: 'بيانكو لاتيه',
      category: 'Gourmand',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 13,
      name: '212',
      category: 'Fresh',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 14,
      name: 'روز فانيليا',
      category: 'Floral',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 15,
      name: 'جان بول لابيل',
      category: 'Oriental',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: imgwomen,
    },
    {
      id: 16,
      name: 'خمرة قهوة',
      category: 'Spicy',
      size: '60ml',
      sexual: 'Man',
      price: 500,
      image: imgman,
    },
    {
      id: 17,
      name: 'بلاك اوبيوم اوفر ريد',
      category: 'Coffee',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 18,
      name: 'جاكور كلاسيك',
      category: 'Aromatic',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 19,
      name: 'اديداس',
      category: 'Sport',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 20,
      name: 'جود جيرل',
      category: 'Sweet',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: imgwomen,
    },
    {
      id: 21,
      name: 'باد بوي',
      category: 'Spicy',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 22,
      name: 'شيخ الشيوخ',
      category: 'Oud',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 23,
      name: 'لاكوست',
      category: 'Fresh',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 24,
      name: 'سكاندل عالي',
      category: 'Floral',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 25,
      name: 'خمرة',
      category: 'Gourmand',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 26,
      name: 'سترونجر وذ يو',
      category: 'Woody',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 27,
      name: 'التراميل',
      category: 'Sweet',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 28,
      name: 'انفكنتس',
      category: 'Aquatic',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 29,
      name: 'سلفر سنت',
      category: 'Oriental',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 30,
      name: 'تشانيل بلاتينيوم',
      category: 'Woody',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 31,
      name: 'بلاك اوركيد',
      category: 'Floral',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 32,
      name: 'سترونج مي',
      category: 'Spicy',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 33,
      name: 'سوفاج',
      category: 'Spicy',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 34,
      name: 'فيرزاتشي',
      category: 'Fresh',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 35,
      name: 'سيجار',
      category: 'Tobacco',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 36,
      name: 'عود بوكية',
      category: 'Oud',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 37,
      name: 'بربري هير',
      category: 'Fruity',
      size: '60ml',
      sexual: 'women',
      price: 500,
      image: handwomen,
    },
    {
      id: 38,
      name: 'سيجار',
      category: 'Tobacco',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 39,
      name: 'انا الابيض',
      category: 'Musk',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },

    {
      id: 40,
      name: 'عود وود',
      category: 'Woody',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 41,
      name: 'القرشي',
      category: 'Oriental',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },

    {
      id: 42,
      name: 'كريد سلفر',
      category: 'Fresh',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman,
    },
    {
      id: 43,
      name: 'بلو دي تشانيل',
      category: 'Woody',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman,
    },
    {
      id: 44,
      name: 'توباکو فانيليا',
      category: 'Tobacco',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 45,
      name: 'كلمات',
      category: 'Amber',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 46,
      name: 'ميجامار',
      category: 'Aquatic',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 47,
      name: 'بكرات روج',
      category: 'Sweet',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 48,
      name: 'عود ابيض',
      category: 'Oud',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image: unisex,
    },
    {
      id: 49,
      name: 'اربابورا',
      category: 'Fruity',
      size: '60ml',
      sexual: 'unisex',
      price: 500,
      image:unisex
    },
    {
      id: 50,
      name: 'كريد افينتوس',
      category: 'Woody',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman
    },
    {
      id: 51,
      name: 'بلاك افغانو',
      category: 'Smoky',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman
    },
    {
      id: 52,
      name: 'اميجنيشن',
      category: 'Citrus',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: handman
    },
    {
      id: 53,
      name: 'BMW',
      category: 'Leather',
      size: '60ml',
      sexual: 'man',
      price: 500,
      image: imgman
    },
  ]);

  // 3. States البحث والفلترة
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 4. State السلة
  const [cart, setCart] = useState([]);

  // 5. دالة الفلترة الذكية (useMemo للأداء العالي)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // 6. وظائف السلة (إضافة، حذف، تحديث كمية)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id);
      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };

  // 7. حساب الإجمالي
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // 8. دالة إرسال الطلب للواتساب
  const sendWhatsAppOrder = () => {
    const phoneNumber = '201095853532'; // استبدله برقمك (كود الدولة + الرقم)
    const productsDetails = cart
      .map(
        (item) =>
          `• ${item.name} (${item.quantity}x) - $${item.price * item.quantity}`,
      )
      .join('\n');

    const message = `مرحباً روح، أرغب في طلب المنتجات التالية:\n\n${productsDetails}\n\nإجمالي المبلغ: $${cartTotal}\nشكراً لكم!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank',
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
