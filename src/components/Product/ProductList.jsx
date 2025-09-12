import { useState } from "react";
import InfiniteScrollToggle from "../Button/InfiniteScrollToggle";
import InfiniteProductList from "./InfiniteProductList";
import PaginationProductList from "./PaginatedProductList";

const ProductList = () => {
  const [useInfinite, setUseInfinite] = useState(false);

  return (
    <div>
      <InfiniteScrollToggle useInfinite={useInfinite} setUseInfinite={setUseInfinite} />
      {useInfinite ? <InfiniteProductList /> : <PaginationProductList />}
    </div>
  );
};

export default ProductList;
