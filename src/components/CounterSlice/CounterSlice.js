import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cartItems:[],
  newProduct:[],
  isLoged:false,

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      let f=0;
     state.cartItems.forEach((item)=>{
       if(item.id ===action.payload.id){
         f=1;
       }
     })
     if(!f)state.cartItems.push(action.payload);
    },
    removeFromCart: (state,action) => {
     state.cartItems = state.cartItems.filter(item=>item.id !==action.payload)
    },
    addQuantity: (state, action) => {
      state.cartItems=state.cartItems.map(item=>item.id===action.payload.id?{
            ...item,
            qty:action.payload.qty
      }
      :item
      )
    },
    addProduct:(state,action)=>{
      console.log(action);
      console.log(action.payload.images[11]);
      state.newProduct=[...state.newProduct,action.payload]
    },
    LogedInOut:(state)=>{
          state.isLoged = !state.isLoged
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addQuantity, addProduct,LogedInOut } = counterSlice.actions

export default counterSlice.reducer