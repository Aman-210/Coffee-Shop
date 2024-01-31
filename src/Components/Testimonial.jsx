import { Testimonials } from "../Data/Data"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Rating, Stack } from "@mui/material";




const Testimonial = ()=>{
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
    
        slidesToShow: 1,
        slidesToScroll: 1
      };  


    return(
    <div className="mt-4 mb-8">
    <div className=" flex justify-center ">
        <p style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' , fontSize:'30px'}}> Testimonails</p>
    </div>
   
    <Slider className="ml-[176px] max-xs:ml-[0px] max-xs:mr-[0px] mr-[183px] mb-20 " {...settings}> 
      {
        Testimonials.map((data)=>{
            return(
                <div className=" mt-4 flex  justify-center items-center    ">
                <div className="w-[150vh] max-xs:w-[50vh] h-[50vh] max-xs:h-[60vh] max-xs:ml-1  border-[2px] border-gray-600 rounded-2xl">
                   <div className="flex max-xs:flex-col justify-around  mt-20 max-xs:mt-2 ">
                   <div>
                    <div className=" w-[25vh] max-xs:w-[20vh] max-xs:h-[20vh] h-[25vh] rounded-full max-xs:ml-28 flex items-center justify-center">
                       <img className="rounded-full " src={data.image} alt="image" style={{ width: '100%', height: '100%' ,}} />
                    </div>
                   </div>
                  <div className="flex flex-col gap-2 max-xs:mt-10  max-xs:ml-2">
                   <FormatQuoteIcon className="text-white"/>
                   
                  <div className="flex gap-4  ">
                     <p className=" max-xs:text-base" style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' , fontSize:'20px'}}>{data.name} - <span className="text-gray-300 text-base max-xs:text-sm">{data.designation}</span></p>
                     <Stack >
                     <Rating defaultValue={5} style={{fontSize:"22px"}} readOnly />
                     </Stack>
                  </div>
                  <div>
                  <p className="text-4xl text-white max-xs:text-3xl" style={{fontFamily:"'kanit', sans-sarif" }}> {data.heading} </p>
                  <p className="text-base" style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }} >{data.feedback}</p>
                  </div>
                   <FormatQuoteIcon className="text-white"/>
                   </div>
                </div>
                </div>
              </div>
            )
            
        })
    }
    </Slider>
 
     
    
    </div>
    )
}

export default Testimonial;