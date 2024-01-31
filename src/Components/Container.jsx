



const Container = ()=>{
    return (
        <>
       <div>
        {/* background for mobile */}
       <img className="bg-cover bg-center  h-[98vh] w-full   sm:hidden md:hidden lg:hidden " alt="/"  src={process.env.PUBLIC_URL + '/Mobile_background.jpg'} />
       <div className=" absolute inset-0 flex flex-col sm:hidden md:hidden lg:hidden  items-center text-center" style={{fontFamily:"'kanit', sans-sarif" , }}>

         <h3 className="text-2xl max-xs:text-1xl text-white font-bold  mt-64">Welcome to Coffee Store</h3>
         <h2 className="text-4xl max-xs:text-2xl text-white font-bold mt-2">Freshly roasted coffee and barishta</h2>
         <h1 className="text-3xl max-xs:text-1xl text-white font-bold mt-2">accessories</h1>
       </div>

       {/* background for other */}
        <div className=" w-full max-xs:hidden  flex flex-col justify-end  " style={{backgroundImage:'url("Images/coffee.jpg") ' ,backgroundSize:"cover" , height:'93vh'}}>
       
   
         <div className=" absolute inset-0 flex flex-col  items-center text-center" style={{fontFamily:"'kanit', sans-sarif"}}>

         <h3 className="text-2xl max-xs:text-1xl text-white font-bold  mt-52">Welcome to Coffee Store</h3>
         <h2 className="text-4xl max-xs:text-2xl text-white font-bold mt-2">Freshly roasted coffee and barishta</h2>
         <h1 className="text-3xl max-xs:text-1xl text-white font-bold mt-2">accessories</h1>
         </div>
       
         <div className="ml-10 mb-10 max-xs:hidden ">
            <p className="text-3xl max-xs:text-2xl " style={{fontFamily:"'kanit', sans-sarif" ,  color: 'rgb(247, 213, 189)' }}>Fresh roasted coffee</p>
            <p className="text-3xl max-xs:text-2xl " style={{fontFamily:"'Instrument Serif', serif" ,   color: 'rgb(247, 213, 189)'}}>with 24hour delivery</p>
         </div>
        </div>
        </div>
        </>
    )
}



export default Container;