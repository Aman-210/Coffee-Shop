import { Box , styled, Typography , Tabs , Tab , ThemeProvider} from "@mui/material"; 

import { theme } from "../../style";


const Section = styled(Box)(({theme})=>({
   [theme.breakpoints.up('laptop')]:{
     display:'flex',
     flexDirection:'column',
     alignItem: 'center',
     boxSizing: 'border-box',
     maxWidth: '100%',
     
   },
   [theme.breakpoints.up('tablet')]:{
      display:'flex',
      flexDirection:'column',
      alignItem: 'center',
      boxSizing: 'border-box',
      maxWidth: '100%',
      
     
   },
   [theme.breakpoints.down('mobile')]:{
      display:'flex',
     flexDirection:'column',
     alignItem: 'center',
     boxSizing: 'border-box',
     maxWidth: '100%'
   },
   [theme.breakpoints.up('desktop')]:{
      display:'flex',
      flexDirection:'column',
      alignItem: 'center',
      boxSizing: 'border-box',
      maxWidth: '100%'
   },
  }));





const TopHeading = styled(Typography)`
 display:flex;
 justify-content: center;
 align-items:center;
 font-weight:600;
 font-size: 1.2rem;
 color: #fff;
 font-family: 'Kanit', sans-serif;
 `
 const MiddleHeading = styled(Typography)(({theme})=>({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   fontWeight: 600,
   fontSize: '2rem',
   color: '#fff',
   fontFamily: "'Kanit', sans-serif",


   [theme.breakpoints.down('mobile')]:{
      fontSize: '1rem',
   },
}))
 const LowerHeading = styled(Typography)(({theme})=>({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   fontWeight: 600,
   fontSize: '2rem',
   color: '#fff',
   fontFamily: "'Kanit', sans-serif",
   

   [theme.breakpoints.down('mobile')]:{
      fontSize: '1rem',
   }
}))
 
 const Heading = styled(Box)(({theme})=>({
   position: 'absolute',
   bottom: '18rem',
   left: '29rem',
   transform: 'translateY(-50%)',
   [theme.breakpoints.down('tablet')]:{
      position: 'absolute',
      bottom:'53rem',
      left: '9rem',
      transform: 'translateY(-50%)'
   },
   [theme.breakpoints.down('mobile')]:{
      bottom:'34.5rem',
      left: '3rem',
   },
 }))
 
  
 
 const SubHeading = styled(Box)(({theme})=>({
   position: 'absolute',
   top: '85%',
   left: '0',
   
   transform: 'translateY(-50%)',
  color:'#fff',

  [theme.breakpoints.down('tablet')]:{
   position: 'absolute',
   height:'10vh',
   top: '30%',
   bottom:'-4.4vh',
   left: '0',
   transform: 'translateY(-50%)',
   background:'black',
   color:'#fff',
  },
  [theme.breakpoints.down('mobile')]:{
   top: '40%',
   height:'10vh',
   
  }
 }))
 

 
 const SubUpperHeading = styled(Typography)(({theme})=>({
   fontWeight: 100,
    fontSize: '1rem',
   fontFamily: "'Kanit', sans-serif",
   [theme.breakpoints.down('mobile')]:{
      fontSize: '.8rem',
      
     }
 }))
 
 const SubLowerHeading = styled(Typography)(({theme})=>({
   fontWeight: 600,
   fontSize: '2rem',
   color: 'rgb(247, 213, 189)',
   fontFamily: "'Instrument Serif', serif",

   [theme.breakpoints.down('mobile')]:{
     
      fontSize:'1.2rem'
     }
 }))
 

 
 const Nav = styled(Tabs)(({theme})=>({
   marginTop:'.01vh',
   color:'#fff',
   background:'black',

   [theme.breakpoints.down('tablet')]:{
   display:'none'

   },
   
 }))
 const Image = styled('img')(({theme})=>({
   width:'100%'  ,
  
   marginTop:'5vh' ,
   [theme.breakpoints.down('tablet')]:{
    
    
      marginTop:'4vh' ,
   
   },
   [theme.breakpoints.down('mobile')]:{
    
      height:'41vh',
      marginTop:'4vh' ,
   
   }
 }))
 
 

 const Container = ()=>{
    return (
      <ThemeProvider theme={theme}>
     <Section>
     <Image src="https://opencart.workdo.io/coffee/image/cache/catalog/slider/1-1920x900.jpg" alt="header pitcure" /> 
     <Heading>
     <TopHeading>
      Coffee Store
     </TopHeading>
     <MiddleHeading>
      Freshely roasted coffee and barishta
     </MiddleHeading>
     <LowerHeading>
      accessories.
     </LowerHeading>
     </Heading>
       
         <SubHeading>
            <SubUpperHeading>
            Coffee Store
            </SubUpperHeading>
           <SubLowerHeading>
            Fresh roasted coffee <br/>with 24hour dilevery

            </SubLowerHeading>
         </SubHeading> 
         <Nav>
         <Tab style={{ marginLeft:'5.5vh', color: '#fff' , fontFamily: "'Kanit', sans-serif"}} label= "Latte"/>
         <Tab style={{ marginLeft:'5.5vh', color: '#fff' , fontFamily: "'Kanit', sans-serif"}} label= "Capsulated Coffee"/>
         <Tab style={{ marginLeft:'5.5vh', color: '#fff' , fontFamily: "'Kanit', sans-serif"}} label= "Cappucino"/>
         </Nav>
     </Section>
     </ThemeProvider>
    )
 }
 export default Container;