import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import ProductItem from "./ProductItem";

const InfiniteProductList = () => {
  const dispatch = useDispatch();
 const { categories } = useSelector(s => s.products);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const { page, pageSize, order, sortBy, selectedCategory } = useSelector(h => h.helplist);

  // Reset products when filter changes
  useEffect(() => {
    setProducts([]);
    setSkip(0);
    setHasMore(true);
    setTotal(0);
    fetchNextProducts(true);                                                              // fetchNextProducts(true): The true argument means “reset” mode, so fresh products replace the old list.
    // eslint-disable-next-line
  }, [selectedCategory, sortBy, order, pageSize]);

  // Fetch next products
  const fetchNextProducts = useCallback(async (reset = false) => {
    setLoading(true);
    try {
      const params = {
        category: selectedCategory,
        sortBy,
        order,
        limit: pageSize,
        skip: reset ? 0 : products.length,
      };
      const result = await dispatch(fetchProducts(params)).unwrap();
      if (reset) {
        setProducts(result.products || []);
        setTotal(result.total);
        setHasMore((result.products?.length || 0) < result.total);
        setSkip(result.products?.length || 0);
      } else {
        setProducts(prev => [...prev, ...(result.products || [])]);
        setSkip(prev => prev + (result.products?.length || 0));
        setTotal(result.total);
        // If no more products to fetch
        setHasMore(products.length + (result.products?.length || 0) < result.total);
      }
    } catch (e) {
      enqueueSnackbar("Failed to fetch products: " + e, { variant: "error" });
      setHasMore(false);
    }
    setLoading(false);
    // eslint-disable-next-line
  }, [dispatch, selectedCategory, sortBy, order, pageSize, products.length]);

  // Infinite scroll listener
  useEffect(() => {
    if (!hasMore || loading) return;                                                                        // // Don't fetch more if done or currently loading.
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        fetchNextProducts();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, fetchNextProducts]);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {loading && <div className="text-center py-2 animate-pulse">Loading more...</div>}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-2 text-gray-500">No more products to show</div>
      )}
    </div>
  );
};

export default InfiniteProductList;
















/*

window.innerHeight: height of the visible browser viewport.

document.documentElement.scrollTop: vertical pixels the document is currently scrolled from the top.

+ 200: a threshold buffer so new data loads just before the user hits the bottom, ensuring smooth experience without waiting.

document.documentElement.offsetHeight: total height of the entire document content.

When the sum of visible height plus scroll offset plus buffer is greater than or equal to document height, it indicates the user is near the page bottom.

It then triggers fetchNextProducts() to load more items.

*/