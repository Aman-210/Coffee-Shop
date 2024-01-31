import { RawCoffee } from "../../Data/Data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { addToCart  , productDetail} from "../../Reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Product3 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1;
  }

  const cartItems = useSelector((state) => {
    return state.product.cart
  })

  const dispatch = useDispatch();

  const goToDetail = (payload)=>{
    dispatch(productDetail({productId: payload.id}))
  }

  const addProduct = (payload) => {
    const IsItemPresent = cartItems.some((item) => item.id === payload.id)

    if (IsItemPresent) {
      alert("Item is already in the cart")
    } else {
      dispatch(addToCart(payload))
    }


  }

  return (
    <>

      <Slider className="ml-[40px] max-xs:ml-[60px]   mr-[40px] max-xs:mr-[30px]  mb-20" {...settings}>
        {
          RawCoffee.map((data , id) => {
            return (

              <div key={id} className="  border-lg  w-[280px] ml-8 max-xs:ml-4 mt-4 scroll-smooth">
                <div className='w-[280px] inline-block cursor-pointer relative p-2'>
                  <img
                    className='w-[280px] h-[250px] block bg-cover'
                    src={data.image}

                  />

                  <Link to={"/detail"}>
                    <div onClick={() => goToDetail(data, id)} className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                      <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                        Detail View
                      </p>

                    </div>
                  </Link>
                </div>
                <div className=" ">
                  <div className="text-white">
                    <p style={{ fontFamily: "'kanit', sans-sarif", color: 'rgb(247, 213, 189)', fontSize: '20px' }}>{data.name}</p>
                    <p className="text-lg">$ {data.prize}</p>
                  </div>
                  <div>
                    <button className="bg-yellow-600 w-[15vh] h-8 mt-2" onClick={() => addProduct(data)}>Add to cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>

    </>
  )
}

export default Product3;




