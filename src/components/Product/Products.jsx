import { styled, Tab, Tabs,Box  , Grid ,  Typography, Container , FormControl,NativeSelect,} from "@mui/material";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';






const Section = styled(Box)`
width:100%;
height:100vh;
background: black;
margin-top: -16rem;

`

const Nav = styled(Tabs)`
margin-left: 2.5rem;
margin-top: -14rem;
color: #fff;
`
const Price = styled(Typography)`
margin-left: 37vh;
font-size: 2vh;
margin-top:-6vh;

`
const Cart = styled(Typography)`
margin-left: 35vh;
margin-top:-22vh;
cursor:pointer;
`
const responsive = {
  superLargeDesktop: {
    
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}


const Product = ()=>{
   
  
   
 


    return(
      
        <>
        <Section>
      <Nav>
     <Tab style={{color: '#fff' , fontFamily: "'Kanit', sans-serif"}} label= "Latte"/>
     <Tab style={{color: '#fff' , fontFamily: "'Kanit', sans-serif"}} label= "Capsulated Coffee"/>
     <Tab style={{color: '#fff' , fontFamily: "'Kanit', sans-serif"}} label= "Cappucino"/>
      </Nav>
     
      <Container fixed>
        <Box sx={{ bgcolor: 'black', height: '60vh',  width:'130%',   marginLeft:'-12rem'}}>
        
        <Grid container spacing={2} columns={16} sx={{
          
        }}>
       {/* product 1 */}
        <Grid  xs={4} sx={{
          marginLeft:'6.5rem',
          border: 'groove white .5px',
          marginTop:'5rem',
          height: '20vh',
          color: '#fff',
          borderRadius:'25px',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius:'35px',
          }
          }}>
         <Box>
         <img src="https://th.bing.com/th/id/R.853ddd3d22d9c6a743a516ae1e2fc545?rik=MMHhncWiQfQQjw&riu=http%3a%2f%2fwww.healthycoffee.com%2fstore%2fwp-content%2fthemes%2fagriculture%2fhome-images%2flayer-slider-images%2froast-images%2fslider-roast-classic2.png&ehk=t2nZxvullGnrHby311Z0aib3s3%2f%2fn8pPTi%2bgbqncosc%3d&risl=&pid=ImgRaw&r=0" width={'150vh'} alt="Espresso" />
         
         <Typography sx={{
          marginLeft:'1rem',
          marginTop:'-2rem'
              }}    >
          <h2>Espresso </h2>
         </Typography>
         <Price>
          <p><b>Price:</b> 2.50$</p>
         </Price>
         <Cart>
          <h4>+ <u>Add To Cart</u> </h4>
         </Cart>
         <Box sx={{ minWidth: 120 , }}>
         <FormControl  sx={{
          marginLeft:'20vh',
          marginTop: '9vh',
          backgroundColor:'#fff' ,
          '&:hover':{
            backgroundColor:'grey'
          },
          borderRadius: '16px',
          width:'14vh',
          height:'4vh',
         }}>
         
         <NativeSelect
         
          sx={{
            marginLeft:'1px'
          }}
          
         >
          <option >small  </option>
          <option  >Medium</option>
          <option >Large</option>
         </NativeSelect>
        </FormControl>
       </Box>
         </Box>
         
         </Grid>
           {/* product2 */}
         <Grid  xs={4} sx={{
          marginLeft: '6rem',
          border: 'groove white .5px',
          marginTop:'5rem',
          height: '20vh',
          color: '#fff',
          borderRadius:'25px',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius:'35px',
          }

        }}>
        <Box>
        <img src="https://freepngimg.com/thumb/coffee/76615-coffee-cup-iced-americano-tea-vietnamese-espresso.png" width={'150vh'} alt="Americano" />
        <Typography sx={{
          marginLeft:'1rem',
          marginTop:'-2rem'
              }}>
          <h2>Americano</h2>
          
         </Typography>
         <Price>
          <p><b>Price:</b> 2.50$</p>
         </Price>
         <Cart>
          <h4>+ <u>Add To Cart</u> </h4>
         </Cart>
         <Box sx={{ minWidth: 120 , }}>
         <FormControl  sx={{
          marginLeft:'20vh',
          marginTop: '9vh',
          backgroundColor:'#fff' ,
          '&:hover':{
            backgroundColor:'grey'
          },
          borderRadius: '16px',
          width:'14vh',
          height:'4vh',
         }}>
         
         <NativeSelect
          defaultValue={30}
          sx={{
            marginLeft:'1px'
          }}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
         >
          <option value={10}>small</option>
          <option value={20}>Medium</option>
          <option value={30}>Large</option>
         </NativeSelect>
        </FormControl>
       </Box>
        </Box>
         
        </Grid>
        {/* product3 */}
        <Grid  xs={4} sx ={{
        marginLeft:'5rem',
        border: 'groove white .5px',
        marginTop:'5rem',
        height: '20vh',
        color: '#fff',
        borderRadius:'25px',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius:'35px',
          }
        }}>
        <Box>
        <img src="https://www.pngarts.com/files/6/Italian-Cappuccino-Latte-Transparent-Image.png" width={'110vh'}  alt="Latte" />
        <Typography sx={{
          marginLeft:'1rem',
          marginTop:'-2rem'
              }}>
          <h2 >Latte</h2>
         </Typography>
         <Price>
          <p><b>Price:</b> 2.50$</p>
         </Price>
         <Cart>
          <h4>+ <u>Add To Cart</u> </h4>
         </Cart>
         <Box sx={{ minWidth: 120 , }}>
         <FormControl  sx={{
         marginLeft:'20vh',
         marginTop: '9vh',
         backgroundColor:'#fff' ,
         '&:hover':{
           backgroundColor:'grey'
         },
         borderRadius: '16px',
         width:'14vh',
         height:'4vh',
         }}>
         
         <NativeSelect
          defaultValue={30}
          sx={{
            marginLeft:'1px'
          }}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
         >
          <option value={10}>small</option>
          <option value={20}>Medium</option>
          <option value={30}>Large</option>
         </NativeSelect>
        </FormControl>
       </Box>
        </Box>
         
        </Grid>
        </Grid>
        {/* product4 */}
        <Grid container spacing={2} columns={16}>
        <Grid  xs={4} sx={{
          marginLeft:'6.5rem',
          border: 'groove white 1px',
          marginTop:'5rem',
          height: '20vh',
          color: '#fff',
          borderRadius:'25px',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius:'35px',
          }

          }}>
        <Box>
        <img src="https://www.pngarts.com/files/1/Cappuccino-PNG-Picture.png" width={'120vh'} alt="Cappuccino" />
        <Typography sx={{
          marginLeft:'1rem',
          marginTop:'-2rem'
              }}>
          <h2>Cappuccino</h2>
         </Typography>
         <Price>
          <p><b>Price:</b> 2.50$</p>
         </Price>
         <Cart>
          <h4>+ <u>Add To Cart</u> </h4>
         </Cart>
         <Box sx={{ minWidth: 120 , }}>
         <FormControl  sx={{
         marginLeft:'22vh',
         marginTop: '9vh',
         backgroundColor:'#fff' ,
         '&:hover':{
           backgroundColor:'grey'
         },
         borderRadius: '16px',
         width:'14vh',
         height:'4vh',
         }}>
         
         <NativeSelect
          defaultValue={30}
          sx={{
            marginLeft:'1px'
          }}
          inputProps={{
            name: 'size',
            id: 'uncontrolled-native',
          }}
         >
          <option  value={10}>small</option>
          <option value={20}>Medium</option>
          <option value={30}>Large</option>
         </NativeSelect>
        </FormControl>
       </Box>
        </Box>
            
         </Grid>
         {/* product5 */}
         <Grid  xs={4} sx={{
          marginLeft: '6rem',
          border: 'groove white 1px',
          marginTop:'5rem',
          height: '20vh',
          color: '#fff',
          borderRadius:'25px',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius:'35px',
          }
        }}>
        <Box>
        <img src="https://th.bing.com/th/id/R.4c589c36798b947249f77973d7baa7ba?rik=6NmrDxPuxhOEvg&riu=http%3a%2f%2fbk-emea-prd.s3.amazonaws.com%2fsites%2fburgerking.es%2ffiles%2fBK_Web_CAFEMACCHIATTO_500X540px.png&ehk=oDm0XTlDsVffK1cjk2hNtwWlf4McpfeCuGBzOG9bPMM%3d&risl=&pid=ImgRaw&r=0" width={'110vh'} alt="Macchiato" />
        <Typography sx={{
          marginLeft:'1rem',
          marginTop:'-2rem'
              }}>
          <h2>Macchiato</h2>
         </Typography>
         <Price>
          <p><b>Price:</b> 2.50$</p>
         </Price>
         <Cart>
          <h4>+ <u>Add To Cart</u> </h4>
         </Cart>
         <Box sx={{ minWidth: 120 , }}>
         <FormControl  sx={{
         marginLeft:'20vh',
         marginTop: '9vh',
         backgroundColor:'#fff' ,
         '&:hover':{
           backgroundColor:'grey'
         },
         borderRadius: '16px',
         width:'14vh',
         height:'4vh',
         }}>
         
         <NativeSelect
          defaultValue={30}
          sx={{
            marginLeft:'1px'
          }}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
         >
          <option value={10}>small</option>
          <option value={20}>Medium</option>
          <option value={30}>Large</option>
         </NativeSelect>
        </FormControl>
       </Box>
          
        </Box>
        </Grid>
        {/* product6 */}
        <Grid  xs={4} sx ={{
        marginLeft:'5rem',
        border: 'groove white 1px',
        marginTop:'5rem',
        height: '20vh',
        color: '#fff',
        borderRadius:'25px',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderRadius:'35px',
          }
        }}>
       <Box>
        <img src="https://sevenleavestea.com/wp-content/uploads/2020/02/cafe_mocha_hot-1.png" width={'120vh'} alt="Mocha" />
        <Typography sx={{
          marginLeft:'1rem',
          marginTop:'-2rem'
              }}>
          <h2>Mocha</h2>
         </Typography>
         <Price>
          <p><b>Price:</b> 2.50$</p>
         </Price>
         <Cart>
          <h4>+ <u>Add To Cart</u> </h4>
         </Cart>
         <Box sx={{ minWidth: 120 , }}>
         <FormControl  sx={{
          marginLeft:'20vh',
          marginTop: '9vh',
          backgroundColor:'#fff' ,
          '&:hover':{
            backgroundColor:'grey'
          },
          borderRadius: '16px',
          width:'14vh',
          height:'4vh',
         }}>
         
         <NativeSelect
          defaultValue={30}
          sx={{
            marginLeft:'1px'
          }}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
         >
          <option value={10}>small</option>
          <option value={20}>Medium</option>
          <option value={30}>Large</option>
         </NativeSelect>
        </FormControl>
       </Box>
        </Box>
        </Grid>
        
        </Grid>
       
        </Box>
        
        
       </Container>
     
        </Section>
        </>
    )
}
