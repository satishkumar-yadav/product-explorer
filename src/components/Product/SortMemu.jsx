import React from "react";
import { useDispatch } from "react-redux";
import { setOrder, setSortBy } from "../../features/helpSlice";

const sortFields = [
  { label: "Price", value: "price" },
  { label: "Brand", value: "brand" },
  { label: "Rating", value: "rating" },
  { label: "Stock", value: "stock" },
];

//const SortMenu = () => {
//const SortMenu = ({ setSortBy, setOrder }) => {
const SortMenu = () => { 

  const dispatch = useDispatch();

   const handleChange = e => {
    const [field, order] = e.target.value.split(",");
    dispatch(setSortBy(field));
    dispatch(setOrder(order));
  };

  // const handleSort = e => {
  //   const [sortBy, order] = e.target.value.split(",");
  //   dispatch(fetchProducts({ sortBy, order }));
  // };

  return (
    <select className="border p-2 rounded bg-blue-950" onChange={handleChange} defaultValue="">
    {/* <select className="border p-2 rounded" onChange={handleSort} defaultValue=""> */}
      <option value="" disabled>
        Sort By
      </option>
      {sortFields.map(f => (
        <React.Fragment key={f.value}>
          <option value={`${f.value},asc`}>{f.label} (Asc)</option>
          <option value={`${f.value},desc`}>{f.label} (Desc)</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default SortMenu;

//

