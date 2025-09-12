import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  selectedCategory: "",
  sortBy: "",
  order: "asc",   
  pageSize: 10,   
};
 
const helpSlice = createSlice({
  name: "helplist",
  initialState,
  reducers: {
    setpage(state, action) {
      state.page = action.payload;
    },
    setSelectedCategory(state, action) {
      
      state.selectedCategory = action.payload; 
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setOrder(state, action){
      state.order = action.payload;
    },
    setPageSize(state, action){
     state.pageSize = action.payload;
    },
  },            
});        

export const { setPageSize, setOrder, setSortBy, setSelectedCategory, setpage } = helpSlice.actions;
export default helpSlice.reducer;