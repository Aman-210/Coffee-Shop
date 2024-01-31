
import CopyrightIcon from '@mui/icons-material/Copyright';
import FavoriteIcon from '@mui/icons-material/Favorite';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



const Footer1 = ()=>{
    return(
       <>
       <div className="flex justify-around  max-xs:flex-col mt-40">
        <div className="flex flex-col gap-2  max-xs:ml-4">
        <p className="text-xl text-white max-xs:flex max-xs:justify-center max-xs:text-2xl max-xs:mb-10">Coffee Store</p>
        <p className="text-3xl" style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>Fresh roasted coffee <br/>
        <span>with 24hour delivery</span>
        </p>
        
        <p className="text-white">"Welcome to our coffee shop, where every cup <br/> tells a story. Explore our carefully curated <br/> selection of premium  coffees, sourced from around the world, <br/> and savor the  moments of pure bliss with each sip."</p>
        </div>
        <div className="flex flex-col gap-4  max-xs:mt-12 ">
           <p className="text-xl text-white max-xs:flex max-xs:justify-center max-xs:text-2xl max-xs:mb-2">Choose the Origin of India</p>
           <nav className="ml-16 max-xs:ml-40 max-xs:text-xl">
            <ul className='flex flex-col gap-[1vh] max-xs:gap-[4vh] ' style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)',  }}>
                <li >India</li>
                <li>Ukrain</li>
                <li>Spain</li>
                <li>United Kingdom</li>
                <li>Poland</li>
            </ul>
           </nav>
        </div>
        <div  className="flex flex-col gap-4 max-xs:ml-4 max-xs:mt-12">
        <p className="flex max-xs:flex-col max-xs:items-center gap-4 text-white text-xl max-xs:text-2xl max-xs:mb-4">Our Services <span style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>( Monday-Sunday: 8AM - 9PM )</span></p>
        <nav>
            <ul style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' , display:'flex' , flexDirection:'column' , gap:'1vh' }}>
             <li><FiberManualRecordIcon style={{fontSize:'10px' , color:'white'}}  /> Wide selection of specialty coffees sourced from around the world</li>
             <li><FiberManualRecordIcon style={{fontSize:'10px' , color:'white'}}  /> Expertly crafted espresso-based beverages by skilled baristas</li>
             <li><FiberManualRecordIcon style={{fontSize:'10px' , color:'white'}}  /> Customizable coffee creations to suit individual preferences</li>
             <li><FiberManualRecordIcon style={{fontSize:'10px' , color:'white'}}  /> Delicious pastries and baked goods made fresh daily</li>
             <li><FiberManualRecordIcon style={{fontSize:'10px' , color:'white'}}  /> Relaxing and cozy atmosphere for enjoying coffee and conversation</li>

            </ul>
        </nav>
        </div>

       </div>
        <div className='flex justify-around text-white mt-28  mb-2 '>
            <p>Designed and Developed by <span style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>Aman Sharma</span> with <FavoriteIcon className=' text-red-600'/> </p>
            <p className='max-xs:hidden'>Copyright <CopyrightIcon style={{color: 'rgb(247, 213, 189)'}}/> 2024 <span style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>Aman.</span>  All Rights Reserved</p>
        </div>
       </>
    )
}

export default Footer1