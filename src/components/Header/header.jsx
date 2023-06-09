
import {AppBar ,Tabs, Tab ,Toolbar , Box, styled, Drawer , List , ListItem, ListItemButton } from '@mui/material';
 import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
// components 
 
 import LoginDialog from '../Login/LoginDialog';


 const StyledHeader = styled(AppBar)`
 max-width:100%;
 height : 55px;
 background-color: black;
 `
 const Icons = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  cursor: 'pointer',
  '& > :first-child':{
    marginRight: '1px',
  },
  '& > span':{
    marginRight: '6vh',
    marginBottom: '2vh',
    borderRadius: '5px',
    color: '#f3d2b2',
  },
  [theme.breakpoints.down('tablet')]:{
    display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: 'auto',
    
    '& > :first-child':{
      marginRight: '1px',
    },
    '& > span':{
      marginRight: '2vh',
      
    },
  },
  [theme.breakpoints.down('mobile')]:{
   display:'none'
  }
 }))



const Family = styled(Tabs)(({theme})=>({
 marginLeft:'10vh',
 

 [theme.breakpoints.down('mobile')]:{
  display:'none'
 },
 [theme.breakpoints.down('tablet')]:{
  marginLeft:'1vh',
 }

}))
const MenuBar = styled(Box)(({theme})=>({
  display:'none',
 

 [theme.breakpoints.down('mobile')]:{
  display:'block',
  marginLeft:'auto'
 
 }

}))
  
 const ListItem1 = styled(ListItem)(({theme})=>({

  [theme.breakpoints.down('mobile')]:{
    display:'block',
    marginLeft:'10vh'
   
   
  }
 }))
 const ListItem2 = styled(ListItem)(({theme})=>({

  [theme.breakpoints.down('mobile')]:{
    display:'block',
    marginLeft:'12vh',
    fontWeight:'15vh',
    fontSize:'14px',
   color: 'rgb(176, 171, 171)'
  }
 }))
 

 

 const Header = ({size , setShow}) => {
   const [open2 , setOpen2] = useState(false);
  const[open , setOpen] = useState(false);
    const openDialog = ()=>{
        
        setOpen(true)
    } ;
 
   const handleOpen =()=>{
    setOpen2(true)
   };
   const handleClose =()=>{
    setOpen2(false);
   };
   const list =()=>{
    return(
    <Box sx={{ width: '400px', height:'57vh', background:'rgba(0, 0, 0, 0.5)' , color:'#fff', position:'fixed' , fontWeight:'bold' , }} onClick ={handleClose}> 
      <List>
        <ListItem1 >
          <ListItemButton>
          <Tab href='#component1' label="Latte"/>
          </ListItemButton>
          
          <ListItemButton>
          <Tab href='#component2' label="Cups & Mugs" /> 
          </ListItemButton>
          <ListItemButton>
          <Tab href='#component3' label="Raw-Coffee"/>
          </ListItemButton>
          <ListItemButton>
          <Tab href='#component4' label="Organic Coffee"/>
          </ListItemButton>
        </ListItem1>
        <ListItem2 >
          <ListItemButton    onClick={()=>setShow(false)} sx={{color:'rgb(247, 213, 189)'}} >
          <span   style={{ marginRight: '0.5rem'  }}>MyCart</span> <AddShoppingCartIcon/> <span>{size}</span>
          </ListItemButton>
          <ListItemButton onClick={()=>openDialog()} sx={{color:'rgb(247, 213, 189)'}}>
          <span style={{ marginRight: '0.5rem' }}>Login/SignUp</span> <AccountCircleIcon  />
          </ListItemButton>
        </ListItem2>
      
      </List>
    </Box>
    )
   }
       
  return (
    <>
    <StyledHeader>
     <Toolbar>
     <Box style={{cursor:'pointer'}}>
      <img  onClick={()=>setShow(true)}  src= "https://opencart.workdo.io/coffee/image/catalog/storlogo/logo.png" alt="logo" />
     </Box>
     <MenuBar  onClick={()=>handleOpen()}>
     <MenuIcon/>
     </MenuBar>
     <Drawer anchor='top'  open={open2}   onClose={()=>handleClose()}>
      {list()}
      
     </Drawer>
     <Family textColor='inherit' >
      <Tab href='#component1' label="Latte's"/>
      <Tab href='#component2' label="Cups & Mugs" /> 
      <Tab href='#component3' label="Raw-Coffee"/>
      <Tab href='#component4' label="Organic Coffee"/>
      
      
     </Family>
     <Icons >
         
         <AddShoppingCartIcon onClick={()=>setShow(false)} /> <span>{size}</span>
        <AccountCircleIcon  onClick={()=>openDialog()}/>
      </Icons>
    </Toolbar>
    </StyledHeader>
    
    <LoginDialog open={open} setOpen={setOpen}/>
     
      
    </>
  )
}
export default Header;
