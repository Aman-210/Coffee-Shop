import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { decrement, increment, removeFromCart, totalAmount } from '../../Reducer/Reducer';
import { useEffect } from 'react';


const Cart = ()=>{
     const navigate = useNavigate();
     const dispatch = useDispatch();

    //  Logic for navigate one step backward
     const  goBack = ()=>{
        navigate(-1)
     }

 
     // fetch data of cart from Reducer
     const data = useSelector((state)=>{
        return state.product.cart;
     })
     // fetch data of Total Amount of Cart from Reducer
     const Amount = useSelector((state)=>{
        return state.product.totalAmount
     })
  
     

    // Logic  to show the Total Amount of Cart
     useEffect(() => {
        dispatch(totalAmount());
      }, [data]);
    

    //  Remove product from the  cart
     const removeProduct =  (payload)=>{
        dispatch(removeFromCart(payload))
     }

    //  Increase qunatity by 1 when click on + button
     const increase = (id)=>{
        dispatch(increment({ index: id, quantity: 1 }));
     }
      //  Decrease qunatity by 1 when click on - button
     const decrease = (id)=>{
        dispatch(decrement({ index: id, quantity: 1 }));
     }
   
  


    return(
        <>
        <div className=" bg-black w-full h-screen absolute">
         <div className="flex justify-around  gap-96 max-xs:gap-40 mt-2" style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>
            <ArrowCircleLeftIcon onClick={goBack} className='text-yellow-600 cursor-pointer' style={{fontSize:'40px'}}/>
            <h1 className="text-4xl max-xs:text-xl ">Your Shopping Cart</h1>
         </div>
         <div className='flex flex-col gap-10 max-xs:gap-2'>
            
            {
                data.map((data , id)=>{
                    return(
                        <div>
                        <div key={id} className=' flex justify-around mt-4 gap-96 max-xs:gap-40' >
            
            <div className='flex gap-4'>
              <div>
                  <img className='w-[120px] max-xs:w-[100px] h-[120px]' src={data.image} alt="" />
              </div>
              <div className='flex flex-col gap-1' style={{fontFamily:"'kanit', sans-sarif" }}>
                  <h2 className='text-[25px] max-xs:text-[20px] font-bold ' style={{color: 'rgb(247, 213, 189)'}}>{data.name}</h2>
                  <h3 className='text-gray-300 text-base max-xs:text-sm'>Iced Coffee</h3>
                  <p className='text-white text-xl font-bold'>${data.prize}</p>
              </div>
            </div>
            <div className='flex gap-2 mt-8 max-xs:mt-2 max-xs:flex-col '>
                <AddCircleIcon className='text-yellow-600 cursor-pointer '  onClick={()=> increase(id)}/>
                <p className='text-xl mt-[-2px] max-xs:text-xl max-xs:ml-1 text-white' >{data.quantity}</p>
                <RemoveCircleIcon className='text-yellow-600 cursor-pointer'  onClick={()=> decrease(id)}/>  
                <DeleteIcon className='text-yellow-600 cursor-pointer'  onClick={()=> removeProduct(id)} />  
                
            </div>
         </div>
            <div className='w-[140vh] max-xs:w-[50vh] h-[1px] mt-6 mx-auto bg-red-50'> 
              </div>
              </div>
                    )
                })
            }

         </div>
         <div className=' flex justify-around mt-12 gap-96 max-xs:gap-28  '>
            <div className=' flex gap-2 '>
                <p className=' text-3xl max-xs:text-xl' style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>Total Amount:-</p>
                <p className='text-white text-2xl max-xs:text-xl'> ${Amount}</p>
            </div>
            <div>
                <button className='bg-yellow-600 w-40 max-xs:w-20 h-10 max-xs:h-10 max-xs:text-sm  text-white'>Proceed to Checkout</button>
            </div>
         </div>
        </div>
        
        </>
    )
}



export default Cart;