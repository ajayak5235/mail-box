import { useRef, useState } from "react";
import { Form, FormLabel, Button } from "react-bootstrap"

const SignUp = () =>{
 const formRef = useRef();
 const emailInputRef = useRef();
 const passwordInputRef = useRef();
 const [confimPass , setConfirmPass] = useState;


const submitSignUpHandler = (e) => {
e.preventDefault();
const emailEnter = emailInputRef.current.value;
const passwordEnter = passwordInputRef.current.value;
console.log(emailEnter,passwordEnter)


if(passwordEnter !== confimPass){
    alert('Password does not Match')
    return;
}
formRef.current.reset();
}

const confimPassHandler = (e) =>{
e.preventDefault(e.target.value)
}


    return <div>
        <Form onSubmit={submitSignUpHandler}>
           <Form.Group>
            <FormLabel>Email Id:</FormLabel>
            <Form.Control>
                type ='email'
                placeholder='Enter Email id'
                ref = {emailInputRef}
                require
            </Form.Control>
           </Form.Group>
           <Form.Group>
            <FormLabel>Password</FormLabel>
            <Form.Control>
                type='password'
                placeholder = 'Enter Password'
                ref = {passwordInputRef}
                require
            </Form.Control>
           </Form.Group>
           <Form.Group>
            <FormLabel>Confirm Password</FormLabel>
            <Form.Control>
                type='password'
                placeholder = 'Enter Confirm Password'
              onChange={confimPassHandler}
                require
            </Form.Control>
           </Form.Group>
           <Button  type='submit' onClick={submitSignUpHandler}>SignUp</Button>
        </Form>
    </div>
} 
export default SignUp;