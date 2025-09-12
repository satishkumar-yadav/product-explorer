
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import Pagination from "../Pagination";
import ProductItem from "./ProductItem";

const PaginatedProductList = () => { 

  const dispatch = useDispatch();
  const { items, status, error, total } = useSelector(s => s.products);
  const { page, pageSize, order, sortBy, selectedCategory } = useSelector(h => h.helplist);
  const { enqueueSnackbar } = useSnackbar();

   useEffect(() => {
    dispatch(fetchProducts({
      category: selectedCategory,
      sortBy,
      order,
      limit: pageSize,
      skip: pageSize * (page - 1),
    }));
  }, [dispatch, selectedCategory, sortBy, order, pageSize, page]);

  useEffect(() => {
    if (error) enqueueSnackbar(error, { variant: "error" });
  }, [error, enqueueSnackbar]);

  return (
    <div>
       
      {status === "loading" && (
        <div className="text-center py-4 text-xl animate-pulse">Loading...</div>
      )}
      {status === "failed" && (
        <div className="text-center py-4 text-red-500">Error loading products!</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {items.map(product => (
          //console.log(product),
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <div className="m-8">
            <Pagination />
       </div>

    </div>
  );
};

export default PaginatedProductList;

//


////////////////////////////////////////

// function ProductList({products, message}) {

//   let Pitems = products.map((products,index)=>{
//     return(
//           <ProductItem key ={index} products={products} />
//     )
//   })

//   return (
//      <div className="grid grid-cols-3 gap-4">

//           {products.length>=1 
//             ? Pitems
//             : message
                         
//              } 
                          
//       </div>
//   )
// }
 
