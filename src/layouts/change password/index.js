

import { useState } from "react";
import axios from "axios";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images

import sam from './sam-5qu17cF-Jv0-unsplash.jpg';

function PasswordChange() {
  const[email,setemail]=useState('')
  const[newpass,setnewpass]=useState('')
  const[conpass,setconpass]=useState('')
  const[emai_errmsg,setemai_errmsg]=useState(null)
  const[newpass_errmsg,setnewpass_errmsg]=useState(null)
  const[conpass_errmsg,setconpass_errmsg]=useState(null)
  const[incrct_errmsg,setincrct_errmsg]=useState(null)
const OnhandleSubmit=(event)=>{
   event.preventDefault()
   
    if(newpass.length!=0){
         setnewpass_errmsg(false)
    }if(newpass.length<=0){
      setnewpass_errmsg(true)
    }
    if(conpass.length!=0){
      setconpass_errmsg(false)
 }if(conpass.length<=0){
  setconpass_errmsg(true)
 }if(newpass==conpass){
  setincrct_errmsg(false)
 }if(newpass!=conpass){
  setincrct_errmsg(true)
 }
 if((email!=null )&&(newpass.length!=0)&&(conpass.length!=0)&&(newpass==conpass)){
event.preventDefault()
window.location.href='/authentication/sign-in'

 }else{
  alert('require mantary filed')
 }
}
useEffect(() => {
  setemail('ranjithsurendar@gmail.com')
}, []);


  return (
    <div style={{overflowX:'hidden'}}>
    <CoverLayout
      title="Password Security Made Simple !"
      description="Effortlessly enhance your online security with our user-friendly password changing portal"
      image={sam}
    >
       <form onSubmit={OnhandleSubmit}>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label"  variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" value={email}  placeholder="Email"/>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label"  variant="caption" fontWeight="bold">
             New Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" style={newpass_errmsg?{border:"1px solid red"}:{}} onChange={(e) => {
                      setnewpass(e.target.value);
                      {e.target.value.length>0?setnewpass_errmsg(false):setnewpass_errmsg(true)}
                    }
                    
                    } value={newpass} name='newpass' placeholder="New Password" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
             Confirm Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" style={conpass_errmsg?{border:"1px solid red"}:{}} onChange={(e) => {
                      setconpass(e.target.value);
                      {e.target.value.length>0?setconpass_errmsg(false):setconpass_errmsg(true)}
                      {e.target.value==newpass && e.target.value.length>0?setincrct_errmsg(false):setincrct_errmsg(true)}
                    }}  value={conpass} name='conpass' placeholder="Confirm Password" />
                    {incrct_errmsg?<div style={{textAlign:"center",fontSize:"13px",color:"red"}}>incorrect password</div>:''}
        </SoftBox>  
        <SoftBox mt={4} mb={1}>
              <SoftButton 
                   type='submit' variant="gradient" color="dark" fullWidth >
                Submit
              </SoftButton>
            </SoftBox>   
            </form>
    </CoverLayout>
    </div>
  );
}

export default PasswordChange;
// const break_value = {
 
//   email: email,
//   newpass: newpass,
//   conpass: conpass,
// };
// const config = {
//   headers: {
//     accept: "application/json",
//   },
// };
// let Url="http://localhost:8000/auth/password/change"
// axios.put(Url, break_value, config).then( async(res) => {
//    alert(res.data)
//    localStorage.removeItem('verify_mail')
   
// });