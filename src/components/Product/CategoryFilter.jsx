import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/helpSlice";
import { fetchProducts } from "../../features/productsSlice";

const CategoryFilter = () => { //
// const CategoryFilter = ({ selectedCategory, setSelectedCategory, limit, sortBy, order }) => {  

  const dispatch = useDispatch();
  const categories = useSelector(s => s.products.categories);
  const { pageSize, order, sortBy, selectedCategory } = useSelector(h => h.helplist);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setSelectedCategory(value)); 
    dispatch(fetchProducts({ category: value,  sortBy, order, limit:pageSize, skip: 0 }));
  };

  return (
    <>

    <select value={selectedCategory} onChange={handleChange} className="border p-2 rounded bg-indigo-800">
      <option value="">All Categories</option>
      {categories.map((c,i) => (
        // console.log(c),
        <option key={i} value={c.name}>{c.name}</option>
      ))}
    </select>

    {/* <div className="flex gap-2 flex-wrap mb-2">
      <button
        key="all"
        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        onClick={() => dispatch(fetchProducts({}))}
      >
        All
      </button>

      {categories.map((c,i) => (
        // console.log(c),
        <button
          key={i}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
          onClick={() => dispatch(fetchProducts({ category: c }))}
        >
          {c.name}
        </button>
      ))}
    </div> */}

    </>
  );
};

export default CategoryFilter;

//////////




