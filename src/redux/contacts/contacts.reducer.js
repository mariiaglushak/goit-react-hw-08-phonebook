import { createAsyncThunk,createSlice,isAnyOf } from "@reduxjs/toolkit";
import { instance } from "redux/auth/auth.reducer";





export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
      try {
          const { data } = await instance.get('/contacts');
       
          
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkApi) => {
      try {
          const { data } = await instance.post('/contacts',formData);
      
          
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
      try {
          const { data } = await instance.delete(`/contacts/${contactId}`);
        
          return data;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
  }
);




const initialState={
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

const contactsSlice = createSlice({
  
  name: "contacts",
 
  initialState,

  reducers:{
        addFilter(state, action) {
        state.filter=action.payload;
    },
  

  },
  extraReducers:builder=>
  builder.addCase(fetchContacts.fulfilled,(state,{ payload })=>{
    state.contacts.isLoading=false;
    state.contacts.items=payload;
  })
  .addCase(addContact.fulfilled, (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items= [...state.contacts.items,payload];
  })
  .addCase(deleteContact.fulfilled, (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id);
  })
  .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),(state,action)=>{
    state.contacts.isLoading=true;
    state.contacts.error=null;
  })
  .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),(state,{payload})=>{
    state.contacts.isLoading=false;
    state.contacts.error=payload;
  })


});


export const { addFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;



