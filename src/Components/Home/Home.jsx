
// imports all the component


import Container from '../Container'
import Testimonial from "../Testimonial";
import Products from "../Products/AllProducts";
import Footer1 from "../Footer/Footer1";





const Home = ()=>{
    return(
        <>
        <div className=" scroll-smooth">
        
        <Container/> 
        <Products/>
        <Testimonial/>
        <Footer1/>
        </div>
        </>
    )
}

export default Home;