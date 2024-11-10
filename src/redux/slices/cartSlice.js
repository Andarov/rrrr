// rt
import { createSlice } from '@reduxjs/toolkit'
// toast
import { Bounce, toast } from 'react-toastify';

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, {payload})=>{
      const hasProduct = state.value.find((prod)=> prod.id == payload.id);

      if(hasProduct){
        toast.error('Mahsulot savatchada bor', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }else{
        state.value = [...state.value, payload]
        toast.success('Mahsulot savatga qoshildi', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }
  },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer