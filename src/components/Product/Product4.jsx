
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import  {OrganicCoffee}  from "../../constant/data";
import  Item4  from "./Item4";



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



const Product4 = ({handleOnClick})=>{
    return(
        
    <Carousel
     responsive={responsive}
     swipeable={true}
     draggable={false}
     infinite={true}
     >
        {OrganicCoffee.map((item)=>(
            <Item4  key={item.id} handleOnClick={handleOnClick} item={item}/>
            ))
        }
    </Carousel>
       
    )
}
export default Product4;