import { createAsyncThunk,createSlice,isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";


export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchLoginThunk = createAsyncThunk(
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


export const fetchRegisterThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
      try {
          const { data } = await instance.post('/users/signup', formData);
          console.log("data",data)
          setToken(data.token);
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  }
);






const initialState = {
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
  extraReducers:builder=>
  builder.addCase(fetchLoginThunk.fulfilled,(state,{ payload })=>{
    state.isLoading=false;
    state.authenticated=true;
    state.token=payload.token;
    state.userData=payload.user;
  })
  .addMatcher(isAnyOf(fetchLoginThunk.pending, ),(state,action)=>{
    state.isLoading=true;
    state.error=null;
  })
  .addMatcher(isAnyOf(fetchLoginThunk.rejected, ),(state,{payload})=>{
    state.isLoading=false;
    state.error=payload;
  })

  
});




export const authReducer = authSlice.reducer;

