import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
 
const CartButton = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { loggedIn } = useSelector(s => s.user);

  const handleCart = () => {
    if (!loggedIn) {
      enqueueSnackbar("Please login to add to Cart", { variant: "warning" });
      navigate("/login");
      return;
    }  
      dispatch(addToCart(id));
      enqueueSnackbar("Added to Cart", { variant: "success" });
  };
 
  return (
        <button 
        className="bg-blue-600 text-white rounded-full px-3 py-2 hover:bg-blue-700"
        onClick={handleCart}
        >
          Add to Cart
        </button>
    
  );
};

export default CartButton;













/*
<button
      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
      onClick={toggleWishlist}
      aria-label="Add to Wishlist"
    >
      {inWishlist ? "❤️" : "🤍"}
    </button>

    */