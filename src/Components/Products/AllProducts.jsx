import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";







const Products = ()=>{
    return(
        <>
        <div>
            <h1 className="mb-10 mt-10 flex justify-center " style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' , fontSize:'30px' , }}>Our Products</h1>
        </div>
        <Product1/>
        <Product2/>
        <Product3/>
        <Product4/>
        </>
    )
}



export default Products;
