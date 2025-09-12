import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthToggle from "../Authentication/AuthToggle";
import PageSizeDropdown from "../PageSizeDropdown";
import CategoryFilter from "../Product/CategoryFilter";
import SortMenu from "../Product/SortMemu";
import SearchBar from "../Searchbar/SearchBar";
import ThemeToggle from "../ThemeToggle";
// import UserMenu from "./UserMenu";
 
const Header = ({ onWishlistClick, onCartClick }) => {
  const { loggedIn, user } = useSelector(s => s.user);
  const wishlistCount = useSelector(s => s.wishlist.items.length);
  const cartCount = useSelector(s => s.cart.items.length);

  return (
    <>
    <header className="p-4 sticky h-10 bg-white dark:bg-gray-800 shadow flex justify-between items-center">
      <Link className="font-bold text-xl" to="/"> Product Explorer</Link>
      {/* <h1 className="font-bold text-xl">Product Explorer</h1> */}

      <div className="flex items-center gap-5">

        <button className="relative cursor-pointer" onClick={onWishlistClick} aria-label="wishlist">
          ❤️
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full text-xs">{wishlistCount}</span>
          )}
        </button>

        <button className="relative cursor-pointer" onClick={onCartClick} aria-label="cart">
          🛒
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-green-500 text-white px-1 rounded-full text-xs">{cartCount}</span>
          )}
        </button>

        {/* <UserMenu loggedIn={loggedIn} user={user} onWishlistClick={onWishlistClick} onCartClick={onCartClick} onProfileClick="" /> */}

        {loggedIn && (
          <div className="relative group">
            <button className="font-semibold underline cursor-pointer">
              {user.username}
            </button>

            <div className="absolute hidden group-hover:block group-focus:block left-0 mt-2 bg-white shadow rounded p-2 z-10">
              <button className="block mb-2" onClick={onWishlistClick}>My Wishlist</button>
              <button className="block" onClick={onCartClick}>Cart</button>
            </div>
 
          </div>
        )}
 
        <ThemeToggle />
        <AuthToggle />
      </div>
    </header> 

     <div className="flex gap-2 items-center mb-2">
        <SearchBar />

        <CategoryFilter />
        <SortMenu /> 
        <PageSizeDropdown />

        {/* <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} limit={pageSize}  sortBy={sortBy}  order={order} /> */}
        {/* <SortMenu setSortBy={setSortBy} setOrder={setOrder} />  */}
        {/* <PageSizeDropdown pageSize={pageSize} setPageSize={setPageSize} /> */}
      </div>

    </>
  );
}; 

export default Header;


// { pageSize, setPageSize },  { order, setOrder } , { sortBy, setSortBy } , { selectedCategory, setSelectedCategory }
 // const { pageSize, order, sortBy, selectedCategory } = useSelector(s => s.helplist);
          // dispatch(setOrder(order))        // dispatch(setSortBy(sortBy))
 // dispatch(setSelectedCategory(selectedCategory))




















// const handleChange = (e) => {
//       const value = e.target.value;

      
      
//     };


//  <select className=" p-2 ml-2 bg-blue-900" value="select" onChange={handleChange}>
//                   <option value="select">
//                    Select
//                  </option>
//                   <option onClick={() => alert("coming soon")} >
//                    Profile
//                  </option>
//                  <option value="cart" onClick={onCartClick} >
//                    Cart
//                  </option>
//                  <option value="wishlist" onClick={onWishlistClick} >
//                   My Wishlist
//                  </option>
//             </select>



//  <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="border p-2 rounded ml-2 bg-blue-900">
//     {[10, 20, 30].map(size => <option key={size} value={size}>{size}</option>)}
//   </select>