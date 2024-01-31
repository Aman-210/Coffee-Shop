import { createSlice } from "@reduxjs/toolkit";
import { CoffeeData, cupsAndMugs, OrganicCoffee, RawCoffee } from "../Data/Data";


 const initialState = {
    CoffeeData,
    cupsAndMugs,
    RawCoffee,
    OrganicCoffee,
    totalAmount:0,
    cart:[],
    selectedProduct: null,
 }
 const allProducts = [...CoffeeData, ...cupsAndMugs, ...RawCoffee, ...OrganicCoffee];

 const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{

        addToCart: (state, action) => {
            state.cart.push(action.payload)
          },

        removeFromCart:(state, action)=>{
           state.cart.splice(action.payload , 1)
        },

        increment: (state, action) => {
          let { index } = action.payload;
        
          if (state.cart[index]) {
            state.cart[index].quantity +=  1;
          }

     
        },
        decrement: (state, action) => {
          let { index } = action.payload;
          
          if (state.cart[index]&& state.cart[index].quantity > 1) {
            state.cart[index].quantity = state.cart[index].quantity-1
          }
     
        },
        
        totalAmount: (state ) => {
       
         state.totalAmount = state.cart.reduce((total , item)=>{
          return total+= item.prize * item.quantity
         },0)
        },

        productDetail:(state , action) =>{
          const {productId} = action.payload;
          const Product1 = state.CoffeeData.find((product)=> product.id===productId);
          const Product2 = state.cupsAndMugs.find((product)=> product.id===productId);
          const Product3 = state.RawCoffee.find((product)=> product.id===productId);
          const Product4 = state.OrganicCoffee.find((product)=> product.id===productId);

          const selectedProduct = Product1 || Product2 || Product3 || Product4;

          if(selectedProduct){
            state.selectedProduct = selectedProduct
          }else{
            alert("product not found")
            state.selectedProduct = null;
          }

        }
    }
 })

export const {addToCart , removeFromCart , increment , decrement , totalAmount , productDetail} = productSlice.actions;
export default productSlice.reducer;


