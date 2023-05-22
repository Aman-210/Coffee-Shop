
import {styled , Box , Card , CardActions, CardContent, CardMedia, Button , Typography} from '@mui/material'


const Section = styled(Box)(({theme})=>({
  background: 'black',
  marginTop: '0.1rem',
  height: '65vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  [theme.breakpoints.down('tablet')]:{
    height:'50vh',
    
  },
  [theme.breakpoints.down('mobile')]:{
    height:'60vh',
    
  }

}))
const Cards = styled(Card)(({theme})=>({
  width: 345  ,
  background: '#f3d2b2' ,
  marginLeft:'8.5rem' ,
  [theme.breakpoints.down('tablet')]:{
    width:340,
    marginLeft:'5rem',
    
    
  },
  [theme.breakpoints.down('mobile')]:{
    width:330,
    marginLeft:'3rem',
    
    
  }

}))







  const Item3 = ({item , handleOnClick}) => {
  const{ name , price , image , About} = item;
  return (
    <Section>
     <Cards sx={{ width: 345  , background: '#f3d2b2' , marginLeft:'8.5rem'}}>
    <CardMedia
      sx={{ height: 200 }}
      image={image}
      title="Organic coffee"
     />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name} 
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {About}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>handleOnClick(item)} size="small">Add to Cart</Button>
      <Typography marginLeft={'auto'} fontSize={'30px'}>  {price}$</Typography>
    </CardActions>
   </Cards>
    </Section>
  )
}
export default Item3;