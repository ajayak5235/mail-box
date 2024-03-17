import { useRef } from "react"
import { Button, Form, FormLabel } from "react-bootstrap"
import { useDispatch} from "react-redux"
import { Authactions } from "../store/reducer/auth-slice"
import {NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Login = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const submitLoginHandler = async(e) =>{
      e.preventDefault()

      const emailEnter = emailInputRef.current.value;
      const passwordEnter = passwordInputRef.current.value;

      try{

    
          const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfx8l0mcnq37Ua0yCqQr9wEXdt1kDF2FY',{
            method:'POST',
            body:JSON.stringify({
                email: emailEnter,
                password:passwordEnter,
                returnSecureToken: true
            }),
            headers:{
                'Content-type':'Application/json'
            }

        
          })
            if(!response.ok){
                throw new Error('Authentication Failed')

            }
            alert('Login Successful')
            navigate('/mail')
            const data = await response.json()
       
          dispatch(Authactions.login({tokenId: data.idToken , email: data.email}))
           
       
        }catch(error){
            console.error(error)
            alert('Authentication faild')
        }
        
    }

   
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,margin:'auto'}}>
    <div style={{border:'2px solid #aaa', borderRadius:'8px', backgroundColor:'#aaa', margin:'auto' ,justifyContent:'center', padding:'10px',width:'20rem', marginTop:'8%' }}>
            <h1>Login</h1>
        <Form style={{textAlign:'left', margin:'auto' , padding:'20px'}} className="d-flex flex-column">
            <Form.Group>
                <FormLabel>Email Id:</FormLabel>
                <Form.Control
                type='email'
                placeholder="Enter email"
                ref = {emailInputRef}
                required
                />
            </Form.Group>
            <Form.Group>
                <FormLabel>Password:</FormLabel>
                <Form.Control
                type='password'
                placeholder="Enter password"
                ref = {passwordInputRef}
                required
                />
            </Form.Group>
            <Button className="my-3" style={{borderRadius:'30px'}} type='submit' onClick={submitLoginHandler}>Login</Button>
            <NavLink to = '/' style={{textAlign:'center'}}>Forget Password</NavLink>
        </Form>
       
    </div>
    <div >
            <button style={{backgroundColor:'rgb(144, 238, 144)'}} className=" my-3" onClick={() => navigate('/')}>Don't have an account? Sign Up</button>
        </div>
    </div>
}             
export default Login;                                                                                                                                              