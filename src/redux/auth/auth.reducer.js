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
          
          setToken(data.token);
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  }
);




export const fetchRefreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
      try {
        const state=thunkApi.getState();
        const token=state.auth.token;
        setToken(token);
          const { data } = await instance.get('/users/current');
         
          
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  },
  {
    condition:(_, thunkApi) =>{
      const state=thunkApi.getState();
      const token=state.auth.token;
      if(!token) return false;
      return true;

    },

  }
);



export const fetchLogOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
      try {
          const { data } = await instance.post('/users/logout'); 
          
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
  .addCase(fetchRegisterThunk.fulfilled,(state,{ payload })=>{
    state.isLoading=false;
    state.authenticated=true;
    state.token=payload.token;
    state.userData=payload.user;
  })
  .addCase(fetchRefreshThunk.fulfilled,(state,{ payload })=>{
    state.isLoading=false;
    state.authenticated=true;
    state.userData=payload;
  })
  .addCase(fetchLogOutThunk.fulfilled, ()=>{
    return initialState;
  })
  .addMatcher(isAnyOf(fetchLoginThunk.pending,fetchRegisterThunk.pending,fetchRefreshThunk.pending,fetchLogOutThunk.pending ),(state,action)=>{
    state.isLoading=true;
    state.error=null;
  })
  .addMatcher(isAnyOf(fetchLoginThunk.rejected,fetchRegisterThunk.rejected,fetchRefreshThunk.rejected,fetchLogOutThunk.rejected ),(state,{payload})=>{
    state.isLoading=false;
    state.error=payload;
  })

  
});




export const authReducer = authSlice.reducer;

