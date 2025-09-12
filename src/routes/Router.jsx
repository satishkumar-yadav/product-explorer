
import { BrowserRouter, Route, Routes } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../app.css";
import LoginForm from "../components/Authentication/LoginForm";
import RegisterForm from "../components/Authentication/RegisterForm";
import Layout from "../components/Layout";
import ProductDetails from "../components/Product/ProductDetails";
import ProductList from "../components/Product/ProductList";
// import FavProduct from "../components/Product/FavProduct";
// import ProductHome from "../pages/ProductHome";
// //import ComingSoon from "../pages/CommingSoon";

const Router = () => {
  
  return (
   
      <BrowserRouter>
        
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
             {/* <Route index element={<ProductHome />} /> */}
             
             <Route path="/" element={< Layout/>} >
             <Route index element={<ProductList />} />

             <Route path="/product/:id" element={<ProductDetails />} />
             <Route path="/login" element={<LoginForm />} />
             <Route path="/register" element={<RegisterForm />} />

              {/* <Route path="liked-items" element={<FavProduct />} /> */}
              {/* <Route path="about" element={<About />} /> */}

             {/* <Route path="/default" element={<ComingSoon />} /> */}
             <Route path="*" element={<div>404 – Page Not Found</div>} />
 
              </Route>
          </Routes>

      </BrowserRouter>
    
  );
};

export default Router;





