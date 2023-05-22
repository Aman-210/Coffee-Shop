
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { RawCoffee } from "../../constant/data";
import  Item3  from "./item3";



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



const Product3 = ({handleOnClick})=>{
    return(
        
    <Carousel
     responsive={responsive}
     swipeable={true}
     draggable={false}
     infinite={true}
     >
        {RawCoffee.map((item)=>(
            <Item3  key={item.id} handleOnClick={handleOnClick} item={item}/>
            ))
        }
    </Carousel>
       
    )
}
export default Product3;