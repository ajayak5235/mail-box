import { useRef, useState } from "react";
import { Form, FormLabel, Button } from "react-bootstrap"
import {NavLink, useNavigate} from 'react-router-dom'
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () =>{
const navigate = useNavigate()
 const emailInputRef = useRef();
 const passwordInputRef = useRef();
 const [confimPass , setConfirmPass] = useState('')



const submitSignUpHandler = async(e) => {
e.preventDefault();
const emailEnter = emailInputRef.current.value;
const passwordEnter = passwordInputRef.current.value;

if(passwordEnter !== confimPass){
    alert('Password does not Match')
    return;
}


try{
const userCrediencial = await createUserWithEmailAndPassword(auth , emailEnter, passwordEnter)

console.log('>> userCred',userCrediencial)
alert('Signup')
navigate('/login')

}catch(error){
    console.error(error)
}

}

const confimPassHandler = (e) =>{
setConfirmPass(e.target.value)

}


    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,margin:'auto'}}>
    <div style={{border:'2px solid #aaa ',borderRadius:'8px',backgroundColor:'#aaa', margin:'auto', padding:'8px',width:'20rem', marginTop:'8%'}} >
        <h1>SignUp</h1>
        <Form onSubmit={submitSignUpHandler}  style={{margin:'auto' , textAlign:'left' , padding:'20px'}} className='d-flex flex-column '>
           <Form.Group>
            <FormLabel>Email Id:</FormLabel>
            <Form.Control
                type ='email'
                placeholder='Enter Email id'
                ref = {emailInputRef}
                required
            />
           </Form.Group>
           <Form.Group>
            <FormLabel>Password:</FormLabel>
            <Form.Control
                type='password'
                placeholder = 'Enter Password'
                ref = {passwordInputRef}
                required
            />
           </Form.Group>
           <Form.Group>
            <FormLabel>Confirm Password:</FormLabel>
            <Form.Control
                type='password'
                placeholder = 'Enter Confirm Password'
              onChange={confimPassHandler}
                required
            />
           </Form.Group>
           <Button className="mx-5 my-3" type='submit' onClick={submitSignUpHandler}>SignUp</Button>
        </Form>
        
    </div>
    <div >
    <button style={{backgroundColor:'rgb(144, 238, 144)'}} className=" my-3" onClick={() => navigate('/login')}>have an account? Login</button>
</div>
</div>
} 
export default SignUp;


