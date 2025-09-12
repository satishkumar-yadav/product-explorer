import { useDispatch, useSelector } from "react-redux";
import { setPageSize } from "../features/helpSlice";

//const PageSizeDropdown = ({ pageSize, setPageSize }) => {
const PageSizeDropdown = () => {  

  const dispatch = useDispatch();
  const { pageSize } = useSelector(h => h.helplist);

  return(

  <select 
  value={pageSize} 
  onChange={e => dispatch(setPageSize(Number(e.target.value)))} 
  className="border p-2 rounded ml-2 bg-blue-900"
  >
    {[10, 20, 30].map(size => <option key={size} value={size}>{size}</option>)}
  </select>

  );
};

export default PageSizeDropdown;


// dispatch(setPageSize(pageSize))  

{/* <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="border p-2 rounded ml-2 bg-blue-900">
    {[10, 20, 30].map(size => <option key={size} value={size}>{size}</option>)}
  </select> */}