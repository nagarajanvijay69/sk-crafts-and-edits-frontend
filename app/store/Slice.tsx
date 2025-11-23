import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface product {
     _id : string,
     name: string,
     category: string,
     price: number,
     offerPrice: number,
     image: string[],
     link: string,
     discription : string
}
interface category {
     name: string,
     image: string,
}

interface state {
     products : product[],
     categorys : category[],
     message : string
}

const initialState: state = {
     products : [],
     categorys : [],
     message : ''
};


const Slice = createSlice({
     name: "Products",
     initialState,
     reducers: {
          initProduct(state, action: PayloadAction<product[]>) {
               state.products = action.payload;
          },
          initCategory(state, action: PayloadAction<category[]>) {
               state.categorys = action.payload;
          }, 
          initMessage(state, action:PayloadAction<string>) {
               state.message = action.payload;
          }
     }
});


export const { initProduct, initCategory, initMessage} = Slice.actions;
export default Slice.reducer;