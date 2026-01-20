import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// استيراد الصفحات
import Home from './pages/home/Home';

import AllProducts from './pages/allproducts/AllProducts';
import Cart from './pages/cart/Cart';
// استيراد المكونات الأساسية
import { ProductProvider } from './context/ProductContext';
import Layout from './components/Layout/Layout';

// 1. تعريف مسارات الموقع (Routes)
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // الـ Layout يحتوي على Navbar و Footer و Outlet
    children: [
      { index: true, element: <Home /> }, // الصفحة التي تظهر عند فتح الموقع (/)
      { path: 'home', element: <Home /> }, // مسار صفحة الهوم (/home)
      { path: 'allproducts', element: <AllProducts /> }, // مسار كل المنتجات (/allproducts)
      { path: 'cart', element: <Cart /> }, // مسار سلة المشتريات (/cart)
    ],
  },
]);

function App() {
  return (
    // 2. تغليف التطبيق بالـ ProductProvider لضمان وصول البيانات لكل المكونات
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;
