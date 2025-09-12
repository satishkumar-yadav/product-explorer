import ProductList from "./PaginatedProductList"

function FavProduct({products}) {

  return (
    <div>
         <ProductList products={products} message="No Products Added to Wishlist." />
    </div>
  )
}

export default FavProduct