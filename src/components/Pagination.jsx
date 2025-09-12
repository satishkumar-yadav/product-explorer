import { useDispatch, useSelector } from "react-redux";
import { setpage } from "../features/helpSlice";

// const Pagination = ({ currentPage, setPage, pageSize, total }) => {   

const Pagination = () => {     

 const dispatch = useDispatch();
 const {total} = useSelector(s => s.products);
 const { page, pageSize } = useSelector(s => s.helplist);   // page = currenePage, pageSize=limit

const totalPages = Math.ceil(total / pageSize) || 1;
 
  if (totalPages <= 1) return null;

   const prevDisabled = (page == 1) ;
  const nextDisabled = (page===totalPages);
 
  return (
    <div className="flex gap-2 items-center mt-8">
      <button
        className={`${prevDisabled ? "line-through bg-amber-50 cursor-not-allowed" : "cursor-pointer bg-cyan-300" } px-3 py-1 rounded  text-black w-12 `} 
        disabled={prevDisabled}  
        // disabled={page === 1}         
        onClick={() => dispatch(setpage(page - 1))}
      >
        Prev
      </button>

      <span >
         Page {page} of {totalPages}
      </span>

      <button
        className={`${nextDisabled ? "line-through bg-amber-50 cursor-not-allowed" : "cursor-pointer bg-cyan-300" } px-3 py-1 rounded  text-black w-12 `} 
        disabled={nextDisabled}                        
        onClick={() => dispatch(setpage(page + 1))}    
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;




////////////////////////

// function Pagination({ page, total, limit, onPage }) {

//   if (!limit || total <= limit) return null;

//   const pages = Math.ceil(total / limit);
  
//   return (
//     <div className="flex gap-2 my-4 justify-center">
//       {Array.from({length: pages}, (_,i) => 
//         <button
//           key={i+1}
//           className={`px-3 py-1 rounded ${page === (i+1) ? 'bg-blue-700 text-white font-bold' : 'bg-gray-200'}`}
//           onClick={() => onPage(i+1)}
//         >{i+1}</button>
//       )}
//     </div>
//   );
// }


