import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../axios/api";
import { baseURL } from "../axios/endpoints";

const URL = `${baseURL}/products`;

export const fetchProducts = createAsyncThunk( "products/fetchProducts",
  async ({ category, search, sortBy, order, limit, skip }, { rejectWithValue }) => {
    let url = URL;

    if (category) url = `${URL}/category/${category}`;
    else if (search) url = `${URL}/search?q=${search}`;
    else if (sortBy) url = `${URL}?sortBy=${sortBy}&order=${order || 'asc'}`;
     else if (limit != null && skip != null) url = `${URL}?limit=${limit}&skip=${skip}&sortBy=${sortBy || ''}&order=${order || ''}`;
    // else if (limit != null && skip != null) url = `${API}?limit=${limit}&skip=${skip}`;

    try {
      const res = await api.get(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }  
);

export const fetchCategories = createAsyncThunk( "products/fetchCategories",
  async (_, { rejectWithValue }) => {  // _ =  no payload needed, exists but not used, thunk cb signature  must accept payload as first argument, even not required so use _
    try {
      const res = await api.get(`${URL}/categories`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  items: [],
  categories: [],
  status: "idle",
  error: null,
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products || [];
        state.total = action.payload.total || 0;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default productsSlice.reducer;


///
   

