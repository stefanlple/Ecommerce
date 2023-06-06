import productService from "./productService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  products: [],
};

export const getAllProducts = () => {
  createAsyncThunk("products/collection", async (_, thunkAPI) => {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  });
};

export const getProduct = async (id) => {
  createAsyncThunk(`products/${id}`, async (_, thunkAPI) => {
    try {
      return await productService.getProduct;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  });
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.push(action.payload);
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;
