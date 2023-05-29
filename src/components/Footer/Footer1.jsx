import { Box , styled , Divider, Typography , CardContent} from '@mui/material';

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Testimonials } from '../../constant/data';


const Section = styled(Box)(({theme})=>({
  display:'flex',

  alignItems: 'center',
  backgroundColor: 'black',
  color:"#fff",
  [theme.breakpoints.down('mobile')]:{
    display:'block',
    alignItems: 'flex-start',
   }
}))
const UpperHeading = styled(Box)(({theme})=>({
    fontWeight: 100,
     fontSize: '1rem',
    fontFamily: "'Kanit', sans-serif",
    [theme.breakpoints.down('mobile')]:{
       fontSize: '.8rem',
       
      }
  }))
  
  const LowerHeading = styled(Box)(({theme})=>({
    fontWeight: 600,
    fontSize: '2rem',
    color: 'rgb(247, 213, 189)',
    fontFamily: "'Instrument Serif', serif",
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('mobile')]:{
      
       fontSize:'1.2rem'
      }
  }))
const Box1 = styled(Box)(({theme})=>({
    
    marginLeft:'12vh',
    marginBottom:'35vh',
  [theme.breakpoints.down('mobile')]:{
    display:'block',
    marginLeft:'0',
    
  },
  [theme.breakpoints.down('tablet')]:{
    
    marginLeft:'0',
    marginBottom:'73vh',
  }
}))
const Box2 = styled(Box)(({theme})=>({
    whiteSpace: 'nowrap',
    marginLeft:'22vh',
    marginBottom:'38vh',
    [theme.breakpoints.down('mobile')]:{
      display:'none',
    
      },
    [theme.breakpoints.down('tablet')]:{
      marginLeft:'12vh',
      marginBottom:'75vh',
      },
}))
const Box3 = styled(Box)(({theme})=>({
    whiteSpace: 'nowrap',
    marginLeft:'-10vh',
    marginTop:"16vh",
    [theme.breakpoints.down('tablet')]:{
        marginLeft:'-58vh',
       

        marginTop:'32vh',
        marginRight:'auto',
        
      },
    [theme.breakpoints.down('mobile')]:{
        marginLeft:'-1vh',
        marginTop:'-90vh'
      },
}))
const Country = styled(Box)(({theme})=>({
    cursor:'pointer',
    color: 'rgb(247, 213, 189)',
    marginLeft:'12vh',
    
    [theme.breakpoints.down('mobile')]:{
        cursor:'pointer',
        color: 'rgb(247, 213, 189)',
        marginLeft:'1vh',
        padding:'6vh',
        fontSize:'12px'
      }
}))

const Services = styled(Typography)(({theme})=>({

     fontSize:'25px' ,
     fontFamily:"'Instrument Serif', serif" ,
     marginLeft:'36vh' ,

   
    [theme.breakpoints.down('mobile')]:{
        marginLeft:'0vh',
        fontSize:'20px',
    
      },
    [theme.breakpoints.down('tablet')]:{
        marginLeft:'0vh',
        fontSize:'30px',
    
      }
}))
const Points = styled(Typography)(({theme})=>({

     display:'block' ,
     marginLeft:'20vh' , marginBottom:'4vh' , 
     marginTop:'2vh' , 
     color:'rgb(247, 213, 189)',

   
     [theme.breakpoints.down('tablet')]:{
         marginLeft:'0vh',
         marginTop:'0vh',
         fontSize:'22px',
       },
    [theme.breakpoints.down('mobile')]:{
        marginLeft:'0vh',
        marginTop:'0vh',
        fontSize:'12px',
      },
}))
const Testimonial = styled(Box)(({theme})=>({
     width:'70vh',
     height:'40vh',
     marginBottom:'15vh',
     marginLeft:'16vh',
     
    [theme.breakpoints.down('mobile')]:{
        marginLeft:'0vh'
      },
    [theme.breakpoints.down('tablet')]:{
        marginLeft:'0vh',
        fontSize:'30px',
        width:'60vh',
        
      }
}))
const Origin = styled(Typography)(({theme})=>({
    fontSize: '25px',
    fontFamily:"'Instrument Serif', serif" ,
     
    [theme.breakpoints.down('mobile')]:{
        fontSize:'11px',
        
      }
}))



const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }



const Footer1 = ()=>{
    return(
        <Section>
    <Box1>
    
        <UpperHeading>
            Coffee Store
            </UpperHeading>
        <LowerHeading>
            Fresh roasted coffee <br/>with 24hour dilevery

        </LowerHeading>
        <Typography sx={{fontSize:'12px' , marginTop:'5vh' , }}>
        "Welcome to our coffee shop, where every cup tells a story. Explore our carefully curated selection of premium coffees, sourced from around the world, and savor the moments of pure bliss with each sip."
        </Typography>
    </Box1>
    
   
   
    <Box2>
     <Origin >
        Choose the Origin of the Coffee
     </Origin>
     <Country>
     <Typography sx={{ fontFamily:'cursive' }}> 
        India
     </Typography>
     <Typography sx={{ fontFamily:'cursive'}}>
        Ukrain
     </Typography>
     <Typography sx={{ fontFamily:'cursive'}}>
        Spain
     </Typography>
     <Typography sx={{fontFamily:'cursive' ,}}>
        United Kingdom
     </Typography>
     <Typography sx={{ fontFamily:'cursive'}}>
        Poland
     </Typography>
     </Country>
    </Box2>
    <Divider sx={{Background:"rgb(247, 213, 189)" , width:'2px', height:'20vh'}} orientation='vertical'></Divider>
    <Box3>
    <Services >
        Our Services
        
     <span style={{fontSize:'15px' , fontFamily:"'Instrument Serif', serif"  , color:'rgb(247, 213, 189)' , marginLeft:'2vh'}}>(Monday-Sunday:  8AM - 9PM)</span>
     
     </Services>
     <Points >
          <p> <span style={{fontSize:'20px'}}>.</span> Wide selection of specialty coffees sourced from around the world</p>
          <p> <span style={{fontSize:'20px'}}>.</span>  Expertly crafted espresso-based beverages by skilled baristas</p>
          <p> <span style={{fontSize:'20px'}}>.</span>  Customizable coffee creations to suit individual preferences</p>
          <p> <span style={{fontSize:'20px'}}>.</span>  Delicious pastries and baked goods made fresh daily</p>
          <p> <span style={{fontSize:'20px'}}>.</span>  Relaxing and cozy atmosphere for enjoying coffee and conversation</p>
     </Points>
     
       <Testimonial>
        <span >Our Testimonials</span>
        
       <Carousel
       responsive={responsive}
       swipeable={true}
       draggable={false}
       infinite={true}
       
        >
          {Testimonials.map((data)=>(
              <CardContent key={data.id} data={data}  sx={{
                border:'2px solid #fff' ,
                 borderRadius:'5vh',
                 display:'block',
                 width:'70vh',
                 height:'30vh',
                 marginTop:'2vh'
                }}>
              <Typography sx={{ fontSize: 24 , color:'rgb(247, 213, 189)' }}gutterBottom>
                {data.heading}
              </Typography>
              <Typography variant="h6" component="div" sx={
                {
                    fontFamily:'cursive'
                }
              }>
                {data.name}
              </Typography>
              <Typography sx={{ fontSize:'12px' ,whiteSpace: 'pre-line', marginTop:'3vh', color:'rgb(247, 213, 189)'  }} color="#fff">
                {data.Feedback}
              </Typography>
              <Typography sx={{marginTop:'2vh'}} >
               {data.Rating}
                
               
              </Typography>
            </CardContent>
           ) )
          }
      </Carousel>
      </Testimonial>
    </Box3>
    
    
    
    </Section>
    )
}
export default Footer1;