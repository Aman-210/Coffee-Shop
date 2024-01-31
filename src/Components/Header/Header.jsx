
import { useState } from 'react';

// imports from Material UI
import { styled , Drawer } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LoginDialog from '../Pages/Login';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

 

const Header = ()=>{
     
    const [open , setOpen] = useState(false)
  
    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    
    const cartItems = useSelector((state)=>{
     return state.product.cart
    })
    
    const list = ()=>{
        return(
            
            <div style={{ width: '400px', height:'45rem', background:'black' , color:'#fff', position:'fixed' , fontWeight:'bold' , }} > 
          <div className="flex justify-end ">

          <CloseOutlinedIcon className='mr-4 mt-1' style={{fontSize:'40px', fontWeight:"bold"}} onClick ={handleClose}/>
          </div>
           <nav>
            <ul className='flex flex-col gap-10 items-center mt-20 text-2xl' style={{color:'rgb(174, 125, 91)'}}>
                <li className="text-coffee">LATTE'S</li>
                <li>CUPS & MUGS</li>
                <li>RAW-COFFEE</li>
                <li>ORGANIC COFFEE</li>
                <Link to={"/cart"}>  <li className='flex gap-2 ml-6'>YOUR CART <AddShoppingCartOutlinedIcon className='text-white'/>
                <div className=' text-white text-base rounded-full relative  right-2 bottom-2' style={{color:'rgb(247, 213, 189)'}}> {cartItems.length} </div>
                </li></Link>
                <Link to={"/login"}>  <li className='flex gap-2 ml-8'>ACCOUNT  <AccountCircleOutlinedIcon  className='text-white' /> </li> </Link> 
            </ul>
           
        </nav>
     
          </div>
        )
    }

    return(
        <>
        <div className=" h-12  p-4 bg-black z-[100] fixed w-full   flex items-center justify-between font-serif font-bold text-white ">
          <Link to={'/'}>  <h1 className=" text-4xl  cursor-pointer text-slate-200  max-xs:text-yellow-900   " >Coffee</h1></Link>
            <Drawer anchor='top'  open={open}   onClose={()=>handleClose()}>
               {list()}
      
               </Drawer>
        <nav >
            <ul className='flex gap-8 text-zinc-400  max-xs:hidden' >
                <li className='cursor-pointer' >LATTE'S</li>
                <li className='cursor-pointer' >CUPS & MUGS</li>
                <li className='cursor-pointer' >RAW-COFFEE</li>
                <li className='cursor-pointer' >ORGANIC COFFEE</li>
            </ul>

        </nav>
          <div className='flex gap-2  max-xs:hidden'>
            
           <Link to={"/cart"}> <AddShoppingCartOutlinedIcon className='text-slate-200 cursor-pointer ' style={{fontSize:"25px"}}  /></Link>
            <div className=' text-white text-lg max-sm:text-sm  relative  right-2 bottom-2' style={{color:'rgb(247, 213, 189)'}}> {cartItems.length} </div>
           <Link to={"/login"}><AccountCircleOutlinedIcon    className='text-slate-200 cursor-pointer' style={{fontSize:"25px"}} /></Link> 
          </div>
          <div className='hidden max-xs:block mr-4' onClick={()=>handleOpen()}>
          <MenuOutlinedIcon/>
          </div>
        </div>
        </>
    )
}


export default Header;