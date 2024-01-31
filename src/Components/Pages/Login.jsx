import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link, useNavigate } from 'react-router-dom';

const LoginDialog = () => {
   const navigate = useNavigate();

   const goBack = () => {
    navigate(-1)
   };
   

   return (
     <>
      <div className="  absolute w-full text-white " style={{ backgroundImage:'url("Images/Login_Background.jpg") ' ,backgroundSize:"cover" ,height:"100vh"}}>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          {/* <Link to={'/'}> */}
                <ArrowBackRoundedIcon style={{color: 'rgb(247, 213, 189)' , cursor:"pointer"}} onClick={()=>goBack()}/>
            {/* </Link> */}
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold' style={{color: 'rgb(247, 213, 189)'}}>Sign In</h1>
              <form
                // onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                //   onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                //   onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-amber-900 py-3 my-6 rounded font-bold' >
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p style={{color: 'rgb(247, 213, 189)'}}>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p style={{color: 'rgb(247, 213, 189)'}}>Need Help?</p>
                </div>
                <p className='py-8' style={{color: 'rgb(247, 213, 189)'}}>
                  <span className='text-gray-600'>
                    New here?
                  </span>{' '}
                  <Link to='/signup'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
    

      </div>
     
     </>
   )
}
export default LoginDialog;