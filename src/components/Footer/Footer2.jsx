import { Box, Typography, styled , TextField , Button, Tabs, Tab} from "@mui/material";



const Section = styled(Box)(({ theme }) => ({
    background: 'black',
    display:'flex',
   
    alignItems: 'center',

  color:"#fff",
    [theme.breakpoints.down('mobile')]: {
        display:'block',
        width:'100%',
        marginTop:'-17vh'
    }
}))
const Box1 = styled(Box)(({ theme }) => ({
    
   
    
    [theme.breakpoints.down('mobile')]: {


    }
}))

const Nav = styled(Tabs)(({ theme }) => ({
    flexWrap: 'wrap',
    
     
    [theme.breakpoints.down('mobile')]: {


    }
}))
const Heading = styled(Typography)(({ theme }) => ({

    color: '#fff',
    fontSize: "40px",
    fontFamily: 'cursive',
    [theme.breakpoints.down('mobile')]: {
     fontSize:'30px',
    

    }
}))
const Subscribe = styled(Typography)(({ theme }) => ({
     marginTop:'5vh',
    
     
    color: '#fff',
    fontSize: "15px",
    fontFamily:"'Instrument Serif', serif",
    [theme.breakpoints.down('mobile')]: {


    }
}))
const Email = styled(Typography)(({ theme }) => ({
     marginTop:'2vh',
     marginLeft:'2vh',
     

    fontFamily:"'Instrument Serif', serif",
    [theme.breakpoints.down('mobile')]: {
     fontSize:'10px',
     marginLeft:'0vh',
     width:'100%',

    }
}))
const Copyright = styled(Typography)(({ theme }) => ({
    marginTop:'5vh',
    marginLeft:'80vh',
    
   
   [theme.breakpoints.down('mobile')]: {
    marginTop:'2vh',
   marginLeft:'4vh',
   }
}))



const Footer2 = () => {
    return (
        <Section>
            <Box1>
            <Heading>
                Subscribe NewsLetter <br /> and get <span style={{ color: 'rgb(247, 213, 189)' }}>-20% off</span>
            </Heading>
            <Subscribe>
          
            "Welcome to our Coffee Shop app! Subscribe to our newsletter and get an exclusive 20% off<br/> your next purchase. Stay up to date with the latest coffee trends, new product releases, and special offers.<br/> Discover a wide range of premium coffees sourced from around the world, expertly roasted to perfection.<br/> Whether you're a coffee connoisseur or just starting your coffee journey, our app provides a seamless<br/> experience to explore our menu, place orders, and receive personalized recommendations.<br/> Join our community of coffee lovers and indulge in the rich flavors and aromas that our carefully crafted<br/> blends have to offer. Don't miss out on the opportunity to elevate your coffee experience while saving<br/> with our exclusive newsletter discount. Subscribe now and embark on a delightful coffee adventure with us!"
                
            </Subscribe>
            <Email>
            <TextField id="outlined-basic" label="type your email address"  variant="outlined" sx={{border:'2px solid #fff' , background:'white' , color:'black'  , width:'50vh'}} /><Button variant="contained" sx={{height:'8vh' , backgroundColor:'rgb(247, 213, 189)', color:'black' , fontFamily:'cursive' , ":hover":{
                background:'black',
                color:'rgb(247, 213, 189)'
            }}}>Subscribe Us</Button>
            </Email>
            <Copyright >
                <span style={{color:'#f3d2b2'}}>Powered By Aman Sharma</span> © 2023
            </Copyright>
            </Box1>
            
        </Section>
    )
}
export default Footer2;