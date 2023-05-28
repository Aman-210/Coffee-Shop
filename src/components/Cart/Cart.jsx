import { Box , Button, Typography , styled,  ThemeProvider } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import BackspaceIcon from '@mui/icons-material/Backspace';
import React,{useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useEffect } from 'react';
import { theme } from "../../style";

const Container = styled(Box)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    background: 'url(https://wallpapercave.com/wp/60P9094.jpg) center',
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%',
    marginTop:'3rem',
    position:'fixed'
  },
  [theme.breakpoints.down('tablet')]:{
    background: 'url(https://wallpapercave.com/wp/60P9094.jpg) center',
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%',
    marginTop:'3rem',
    position:'fixed'
  },

  [theme.breakpoints.down('mobile')]:{
    background: 'url(https://wallpapercave.com/wp/60P9094.jpg) center',
    backgroundSize: " cover",
    height: '100vh',
    width:'100%',
    marginTop:'2rem',
    position:'fixed'
  }
  
}));


const Heading = styled(Typography)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    padding: '10px',
    marginLeft: '4rem',
    
    fontFamily: 'cursive',
  },
  [theme.breakpoints.down('desktop')]:{
    padding: '65px',
    marginLeft: '3rem',
    marginTop: '1rem',
    fontFamily: 'cursive',
  },
  [theme.breakpoints.down('tablet')]:{
    padding: '15px',
    marginLeft: '1rem',
    marginTop: '4rem',
    fontFamily: 'cursive',
  },

  [theme.breakpoints.down('mobile')]:{
    padding: '1px',
    marginLeft: '1rem',
    marginTop: '3rem',
    fontFamily: 'cursive',
  }

})); 

const Container2 = styled(Box)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    marginTop: '1em',
    marginLeft: '15rem',
    height:'70vh',
    width: '65%'
  },
  [theme.breakpoints.down('desktop')]:{
    marginTop: '5em',
    marginLeft: '5rem',
    height:'70vh',
    width: '65%'
  },
  [theme.breakpoints.down('tablet')]:{
    marginTop: '5em',
    marginLeft: '.1rem',
    height:'70vh',
    width: '155%',
  },
  [theme.breakpoints.down('mobile')]:{
    marginTop: '8em',
    
    height:'60vh',
    width: '145%',
  }
}));

 const CartItems = styled(Box)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid black',
    padding: '30px',
  },
  [theme.breakpoints.down('tablet')]:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid black',
    padding: '10px',
  },
  [theme.breakpoints.down('mobile')]:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid black',
    padding: '5px',


  },
  [theme.breakpoints.down('desktop')]:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid black',
    padding: '10px',
  },
 }));

 const ItemName = styled(Typography)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
   fontSize:'2vh',
    
  },
  [theme.breakpoints.down('tablet')]:{
    fontSize:'2vh',
    
  },
  [theme.breakpoints.down('mobile')]:{
    fontSize:'2vh',
   marginLeft:'0vh'

  },
  [theme.breakpoints.down('desktop')]:{
    fontSize:'2.5vh',
    
  },
 }));

// 2

 const ItemPrice = styled(Typography)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    
    fontSize:'20vh'
  },
  [theme.breakpoints.down('tablet')]:{
    // marginRight:'16vh',
    fontSize:'2vh'
  },
  [theme.breakpoints.down('mobile')]:{
    // marginRight:'70vh',
    fontSize:'2vh',
    marginLeft:'0.5vh'
  },
  [theme.breakpoints.down('desktop')]:{
    fontSize:'2vh'
  },
 }));

// 3

 const Quantity = styled(Box)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    marginTop:'1.4vh',
    marginLeft:'2vh',
  },
  [theme.breakpoints.down('tablet')]:{
    marginTop:'1.4vh',
  },
  [theme.breakpoints.down('mobile')]:{
    marginTop:'1.4vh',
  
    
    
    
 
  },
  [theme.breakpoints.down('desktop')]:{
    marginTop:'1.4vh',
    marginLeft:'2vh',
  },
 }));
 const Image = styled('img')(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    
  },
  [theme.breakpoints.down('tablet')]:{
    width:'100px',
   height:'100px'
  },
  [theme.breakpoints.down('mobile')]:{
   width:'80px',
   height:'80px',
   marginLeft:'-1.5vh',


 
  },
  [theme.breakpoints.down('desktop')]:{
    
  },
 }));
 const Text = styled(Typography)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    fontSize:'25px',
    fontWeight:'bold',
    marginLeft:'-2vh',
    marginTop:'-45vh',
  
  },
  [theme.breakpoints.down('tablet')]:{
    fontSize:'25px',
    fontWeight:'bold',
    marginLeft:'-2vh',
    marginTop:'-45vh',
  },
  [theme.breakpoints.down('mobile')]:{
   fontSize:'20px',
   fontWeight:'bold',
   marginLeft:'-6vh',
   marginTop:'-18vh',
  
 
  },
  [theme.breakpoints.down('desktop')]:{
    fontSize:'25px',
    fontWeight:'bold',   
    
  },
 }));
 const TotalPrice = styled(Typography)(({theme})=>({
  [theme.breakpoints.down('laptop')]:{
    marginLeft:'15vh',
    position:'relative',
    left:'6vh',
    bottom:'22vh',
    fontSize:'25px',
  },
  
  [theme.breakpoints.down('tablet')]:{
    marginLeft:'15vh',
    position:'relative',
    left:'10vh',
    bottom:'22vh',
    fontSize:'25px'
  },
  [theme.breakpoints.down('mobile')]:{
    marginLeft:'5vh',
    marginTop:'27vh',
    fontSize:'25px'
  },
  [theme.breakpoints.down('desktop')]:{
    marginLeft:'auto'
  },
 }));


 

 const Cart =({cart , setCart , handleChange  })=>{
    const [price, setPrice] = useState(0);
     const handelPrice = ()=>{
      let ans = 0;
      cart.map((item)=>{
        ans+= item.quantity *item.price;
        return item;
      })
      setPrice(ans);
    } 
     const handleRemove= (id)=>{
     const arr = cart.filter((item)=>item.id !== id);
     setCart(arr);
     }
    useEffect(()=>{
      handelPrice();
    })

    
     

     
     
     

     return(
      <ThemeProvider theme={theme}>
        <Container>
          <Box >
          <Heading><h2>Your Shopping Cart</h2></Heading> 
        
          <Container2>  
            <Scrollbars style={{width:1000 , height:300}}>
          {
             cart?.map((item ) => (
           
                 <CartItems key={item.id }>
                   <Image src={item.image} width={'100px'} height={'100px'} alt="" />
                <ItemName >
                    {item.name}
                </ItemName>
                <Quantity >
                    <AddBoxIcon onClick={()=>handleChange(item ,+1)} />
                    <Button sx={{
                      height:'2.5vh',
                      border:'2.5px solid black',
                      color:'black',
                      marginBottom: '2vh',
                   
                    }} >{item.quantity} </Button>
                    <IndeterminateCheckBoxIcon  onClick={()=>handleChange(item ,-1)}/>
               
                </Quantity>
              <ItemPrice
                  >
                {item.price}$
                 
              </ItemPrice>
              <BackspaceIcon onClick={()=>handleRemove(item.id)}/>
                    </CartItems>
           
            ))}
            </Scrollbars>
           </Container2>
           <Box sx={{
            display:'flex',
           
            alignItems: 'center',
           
            marginLeft: '3rem',
            
            width: '65%',
            }}>
           <Text fontSize={'25px'} fontFamily={'cursive'}>Total price of your cart</Text>
          
            
           <TotalPrice  >{price}$</TotalPrice>
           </Box>
            </Box>
        </Container>
        </ThemeProvider>
     )
    
    
  
 


    
 }
 export default Cart;