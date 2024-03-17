import { Button } from "react-bootstrap";
const ComposeMail = () =>{
    return <div className="d-flex flex-column" style={{width:'100%', backgroundColor:'white' , width:'100%'}}>
       <div className="d-flex flex-column">
        <span>New Message</span>
       </div>
       <div className="d-flex flex-column" style={{ width: '100%', outline: '0', border: '0px' }}>
    <input style={{ outline: '0', border: '0px', boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)' }} type='email' placeholder="To"/>
    <input style={{ outline: '0', border: '0px' ,boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)'}} type='text' placeholder="Subject" />
    <textarea style={{ outline: '0', border: '0px', boxShadow:'inset 0 -1px 0 rgb(100 121 143/70%)'}} rows='18'></textarea>
</div>
       
<div className="d-flex">
   <Button>Send</Button>
</div>
    </div>
}
export default ComposeMail;