import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const Detail = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) {
    // Handle the case when the selected product is not available
    return <div className='flex justify-center mt-40'><CircularProgress /></div>;
  }

  return (
    <>
      <div className=" bg-black w-full h-screen absolute">
        <div className="text-white text-4xl max-xs:text-3xl flex justify-center mt-16 max-xs:mt-10" style={{ fontFamily: "'kanit', sans-sarif", color: 'rgb(247, 213, 189)' }}>
          Product Detail
        </div>
        <div className='flex justify-around max-xs:flex-col mt-20 max-xs:mt-10'>
          <div className='max-xs:ml-4 '>
            <img className='w-[60vh] h-[70vh] max-xs:w-[50vh] max-xs:h-[40vh] ' src={selectedProduct.image} alt="" />
          </div>
          <div className='w-[60vh] h-[70vh] max-xs:w-[50vh] max-xs:h-[40vh] flex flex-col gap-6 max-xs:mt-10 max-xs:ml-6 '>
            <h2 className="text-white text-3xl " style={{ fontFamily: "'kanit', sans-sarif", color: 'rgb(247, 213, 189)' }}>{selectedProduct.name}</h2>
            <p className="text-white text-2xl  ">Price:- ${selectedProduct.prize}</p>
            <div className='flex gap-4 '>
              <AddBoxIcon className="text-white hover:text-gray-300 cursor-pointer" style={{ fontSize: '30px' }} />
              <p className="text-white text-xl  " > {selectedProduct.quantity} </p>
              <IndeterminateCheckBoxIcon className="text-white hover:text-gray-300 cursor-pointer" style={{ fontSize: '30px' }} />
            </div>
            <div className='flex flex-col gap-4'>
              <p className="text-gray-400 text-base "> Select an option</p>
              <select className='w-[30vh] h-[6vh] cursor-pointer hover:bg-yellow-600 border-[1px] rounded-base ' >
                <option value="12oz">12oz</option>
                <option value="12oz">6oz</option>
              </select>
            </div>
            <div>
              <button className=" w-[15vh] h-12   hover:text-white" style={{ fontFamily: "'kanit', sans-sarif", background: 'rgb(111, 78, 55)' }} >Add to cart</button>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-white text-2xl' style={{ fontFamily: "'kanit', sans-sarif" }} >Description</h1>
              <p className="text-white text-base " style={{ fontFamily: "'kanit', sans-sarif", color: 'rgb(247, 213, 189)' }}> {selectedProduct.About} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
