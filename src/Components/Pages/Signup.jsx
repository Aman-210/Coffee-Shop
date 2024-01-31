import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';



const SignUp = ()=>{




    return(
        <>
      <div className=" bg-black absolute w-full text-white " style={{ backgroundImage:'url("Images/Login_Background.jpg") ' ,backgroundSize:"cover" ,height:"100vh"}}>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75'>
            <Link to={'/'}>
                <ArrowBackRoundedIcon style={{color: 'rgb(247, 213, 189)' , cursor:"pointer"}}/>
            </Link>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold' style={{color: 'rgb(247, 213, 189)'}}>Sign Up</h1>
              <form
               
                className='w-full flex flex-col py-4'
              >
                <input
             
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
             
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-amber-900 py-3 my-6 rounded font-bold'>
                  Sign Up
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
                    Already have an Account?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
    

      </div>
        </>
    )
}

export default SignUp

