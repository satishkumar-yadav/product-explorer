import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import FloatingUpButton from "../components/Button/FloatingUpButton";
import CartModal from "../components/CartModal";
import WishlistModal from "../components/WishlistModal";
import { fetchCategories } from "../features/productsSlice";
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout() {
  const dispatch = useDispatch();
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { loggedIn } = useSelector(s => s.user);
 
  useEffect(() => { 
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
     <Header onWishlistClick={() => setWishlistOpen(true)} onCartClick={() => setCartOpen(true)}  /> 
   
     <main className="p-4 max-w-6xl mx-auto">

      <Outlet />

       <FloatingUpButton />
       {wishlistOpen && <WishlistModal onClose={() => setWishlistOpen(false)} />}
       {cartOpen && <CartModal onClose={() => setCartOpen(false)} />}
        
      </main>

    <Footer />

    </div>
  )
}

export default Layout