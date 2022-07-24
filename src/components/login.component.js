import React, {useState} from "react";
import {Button, Checkbox, Form, FormField } from "semantic-ui-react";
import axios from "axios";
import PRODUCTLIST from './ProductList'
import AntD from './list-antd';
const Login = ()=> {
    const [data, setData] = useState(' ');
   const [declaredData, changeFunction] = useState('false');
   const [email, emailchangeFunction] = useState('');
   const [password, passwordchangeFunction] = useState('');

   const changingFunction = () =>{
       changeFunction('true');
   }

   const emailchangingFunction = (email) =>{
    console.log("email==>",email.target.value);
    emailchangeFunction(email.target.value);
}

const passwordchangingFunction = (password) =>{
    console.log("password==>",password.target.value);
    passwordchangeFunction(password.target.value);
}


const loginData = async()=>{
    let data = {
       "email":email,
       "password":password 
    }
    console.log("data ==>",data);
    const result = await axios.post(`http://127.0.0.1:7070/api/v1/users/login`,data)
    console.log("result===>",result.data);
    localStorage.setItem("token",result.data.data.jwttoken); 
    console.log(localStorage.getItem("token"));
    setData(result);
    }

   if (data.status == 200) {
    console.log("Successfully logged in!!!")
       return(
           <div>
              {/* <PRODUCTLIST/> */}
              <AntD/>
           </div>
       )
   }else {
    return (
        <Form>
        <Form.Field>
            <label>Email: </label>
            <input placeholder="Enter your Email" onChange={emailchangingFunction}></input>
        </Form.Field>

        <Form.Field>
            <label>Password: </label>
            <input placeholder="Enter your Password" onChange={passwordchangingFunction}></input>
        </Form.Field>

        <Form.Field>
            <Checkbox label= 'I agree' onChange={changingFunction}></Checkbox>
        </Form.Field>

        <Button type="submit" onClick={loginData}>Submit</Button>
    </Form>
)
}
}
export default Login;