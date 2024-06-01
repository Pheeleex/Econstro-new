// App.js
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import Home from './Pages/Home';
import AddToCart from './Pages/AddToCart';
import Success from './Pages/AddToCart/Success/Success';
import CheckOut from './Pages/Cart/CheckOut';
import Cart from './Pages/Cart';
import { CartProvider } from './Components/CartContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/AddToCart" element={<AddToCart />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/Checkout" element={<CheckOut />} />
      <Route path="/Cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
