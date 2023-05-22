 import { useState } from "react";
 import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material";


 const Component = styled(Box)`
 height: 70vh;
 width: 90vh;
 `;
 const Image = styled(Box)`
 background:  url(https://images.creativemarket.com/0.1.0/ps/6119432/1820/1213/m1/fpnw/wm1/sknxjzspsfzrbpndzagpg2bzjq01he2y3tek0ivckxe7xejag7kwv7vagwmv0wp1-.jpg?1553419572&s=23ac894380ff016f7d7c2134d30e7f7b) center 56% no-repeat  ;
 background-size:cover;
 height:100%;
 width:28%;
 padding: 47px 36px;
 & > p , & >h5{
    margin-top:10rem;
    color:#fff;
    font-weight:600;
    font-family: 'Kanit', sans-serif;
 }
 `;
 const Wrapper = styled(Box)`
 background: url(https://st.depositphotos.com/1262401/4942/i/450/depositphotos_49427759-stock-photo-vintage-coffee-beans-banner.jpg)  left 55% no-repeat  ;
 background-size:cover;
 display:flex;
 flex-direction: column;
 padding: 1px 35px;
 flex: 1;
 & > div, & > button , & > p{
    margin-top:20px; 
    font-weight:600;
 
 }
 `;

 const LoginButton = styled(Button)`
 text-transform: none;
 background:#663300a1 ;
 color: #fff;
 height: 48px;
 border-radius: 2px;
 
 `;
 const RequestOTP = styled(Button)`
 text-transform: none;
 background:#663300a1 ;
 color: #fff;
 height: 48px;
 border-radius: 2px;
 box-shadow: 0 2px 4px 0 rgb(0,0,0/20%);

 `;
 const Text = styled(Typography)`
 font-size: 12px;
 color:#878787;
 `;
 const CreateAccount = styled(Typography)`
 font-size:14px;
 text-align:center;
 color:#fff;
 cursor:pointer;
 font-weight:800;

 `
 const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Look like you're  new here!",  
        subHeading: 'sign up with your mobile number to get started'
    }
 }
 const signupInitialValues = {
    firstname:'',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',

 }
 const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup , setSignup] = useState (signupInitialValues)

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }
    const toggleSignup =()=>{
        toggleAccount(accountInitialValues.signup);
    }
    const onInputChange = (e)=>{
        setSignup ({...signup , [e.target.name]: e.target.value })
    }
    

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20, }}>{account.subHeading}</Typography>
                    </Image>
                    { 
                     account.view === 'login'?
                        <Wrapper>
                            <TextField variant="standard" label="Enter Email/Mobile Number" />
                            <TextField variant="standard" label="Enter Password" />
                            <Text>By Continuing, You agree to  this company Term of Use and Privacy Policy</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>Or</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount  onClick={()=> toggleSignup()}>New here? Create an account</CreateAccount>
                        </Wrapper>
                    :
                      <Wrapper>
                            <TextField sx={{fontWeight:'900'}} variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' label="Enter Firstname" />
                            <TextField sx={{fontWeight:'900'}} variant="standard" onChange={(e)=>onInputChange(e)} name='lastname' label="Enter Lastname" />
                            <TextField sx={{fontWeight:'900'}} variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username" />
                            <TextField sx={{fontWeight:'900'}} variant="standard" onChange={(e)=>onInputChange(e)} name='email' label="Enter Email" />
                            <TextField sx={{fontWeight:'900'}} variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter Password" />
                            <TextField sx={{fontWeight:'900'}} variant="standard" onChange={(e)=>onInputChange(e)} name='phone' label="Enter phone" />
                            <LoginButton >Continue</LoginButton>

                        </Wrapper>
                    }






                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;