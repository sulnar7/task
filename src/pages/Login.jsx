import React, { useState } from 'react'
import styles from './Login.module.css'
import bookbuzz from '../img/bookbuzz.png'
import { IoIosMail, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { PostLogin } from '../service/service';

function Login() {
    const [type,setType]=useState(true)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let Login=async()=>{
      PostLogin(email,password)
      //   let apiUrl="http://bookbuzz.cronhex.com/api/v1/account/login";
      //   let headers = { "Content-Type": "application/json",                                                                                                
      //   "Access-Control-Origin": "*",
      //   'Access-Control-Allow-Origin':'*',
      // 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
      // "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With"
      //   }
      //   let data={
      //     "email":email,
      //     "password":password
      //   }
      //    fetch(apiUrl,{
      //     method:'POST',
      //     headers,
      //     body:JSON.stringify(data)
      //   }).then(response=>response.json()).
      //   then((response)=>{
      //     console.log(response)
        
      //   }).
      //   catch((error)=>{
      //     console.log("Error:"+error) })
      //     console.log(data,"data")
    }

    console.log(email)
    return (
        <div className={styles.main}>
            <div>
                <h2 lassName={styles.text}>BookBuzz</h2>
                <img src={bookbuzz} alt="" />

            </div>
            <div className={styles.form}>
                <h2 className={styles.text}>Log In</h2>
                <label htmlFor="email">Email</label>

                <div>
                <input type="email" className={styles.mail} placeholder='Enter your email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <IoIosMail className={styles.mainIcon}/>
                </div>  
                <label htmlFor="password">Password</label>
                <div>
                <input type={type?"password":"text"}  className={styles.password} placeholder='**********' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
               <div onClick={()=>setType(!type)} className={styles.passwordIcon}> {type?<IoMdEyeOff className={styles.mainIcon}/>:<IoMdEye className={styles.mainIcon}  />}</div>
                </div>
                
                <input type="submit"  className={styles.button} onClick={Login}/>
                </div>
        </div>
    )
}

export default Login