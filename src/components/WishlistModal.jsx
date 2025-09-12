import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../axios/endpoints";
import { removeFromWishlist } from "../features/wishlistSlice";

const WishlistModal = ({ onClose }) => {
  const wishlist = useSelector(s => s.wishlist.items);
  const [products, setProducts] = React.useState([]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
 
  React.useEffect(() => {
    if (wishlist.length === 0) setProducts([]); 
    else {
      setLoading(true);
      Promise.all( // parallel api request for all products
      wishlist.map(id => fetchSingleProduct(id) )
    ).then(setProducts, setLoading(false));  // setProduct is passed directly to .then so it automatically receives resolved value from previous promise as its parameter, it shorthand for .then(result => setProducts(result)).
    }
  }, [wishlist, loading]);

  const handleRemove = id => {
    dispatch(removeFromWishlist(id));
    enqueueSnackbar("Removed from wishlist", { variant: "info" });
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 w-96 bg-white dark:bg-gray-800 shadow-lg z-50 p-4 overflow-auto">
      
      <button className="cursor-pointer absolute top-2 right-4" onClick={onClose}>Close</button>
      <h2 className="font-bold text-lg mb-4">My Wishlist</h2> 

     {loading && <p className="text-gray-500 py-6 text-center">Loading...</p>}

      <ul>
        {products.map(p => (
          <li key={p.id} className="flex items-center gap-2 border-b p-2">

            <img src={p.thumbnail} className="w-12 h-12" alt={p.title} />
            <span
              className="cursor-pointer font-semibold"
              onClick={() => { onClose(); navigate(`/product/${p.id}`); }}
            >
              {p.title}
            </span>

            <button className="cursor-pointer" onClick={() => handleRemove(p.id)}>❤️</button>
          </li>
        ))}

        {products.length === 0 && <p className="text-gray-500 py-6 text-center">No items in wishlist</p>}
      </ul>
    </div>
  );
};

export default WishlistModal;



















// api.get(`https://dummyjson.com/products/${id}`).then(res => res.data)