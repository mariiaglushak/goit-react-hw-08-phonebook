import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchLogin = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
      try {
          const { data } = await instance.post('/users/login', formData);
          console.log("data",data)
          setToken(data.token);
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  }
);






const initialState={
  authenticated:false,
  isLoading: false,
  error: null,
  token:null,
  userData:null, 
}

const authSlice = createSlice({
  
  name: "auth",
 
  initialState,

  reducers:{
        
  },
  
});




export const authReducer = authSlice.reducer;

