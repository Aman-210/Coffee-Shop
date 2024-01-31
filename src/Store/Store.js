  import  {configureStore} from '@reduxjs/toolkit'
  import productReducer from '../Reducer/Reducer'
  




 const store = configureStore({
    reducer:{
   product: productReducer
    }
 })

 export default store