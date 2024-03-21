
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMail } from '../store/reducer/compose-slice';
import firebase from 'firebase/compat/app'; // Import the main Firebase module
import 'firebase/compat/firestore'; // Import the Firestore module
import { collection,onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ComposeMail = () => {
    // const [editorState, setEditorState] = useState(null); 
    // const onEditorStateChange = (newEditorState) => {
    //     setEditorState(newEditorState);
    // };


  const dispatch = useDispatch()
    const [to , setTo] = useState("")
    const [subject , setSubject] = useState("")
    const [message , setMessage] = useState("")
    // const [data, setData] = useState({to: '', subject:'', message:''})



    const toHandler = (event) =>{
        setTo(event.target.value)
    }
    
    const subjectHandler = (event) =>{
        setSubject(event.target.value)
    }
    const messageHndler = (event) =>{
        setMessage(event.target.value)
    }


const composeHandler = async(e) =>{
e.preventDefault()

if(to === ''){
   return alert('To is require')
}
if(subject === ''){
   return alert('Subject is require')
}
if(message === ''){
   return alert('Message is required')
}

try {
    await db.collection('emails').add({
        to,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });



    // Optionally, you can add a success message or clear the form fields here
    alert('Email sent successfully');
    setTo('');
    setSubject('');
    setMessage('');
    dispatch(closeSendMail())
} catch (error) {
    console.error('Error adding document: ', error);
    alert('An error occurred while sending the email');
}
}


    return (
        
   
    (
    <div className='d-flex' style={{margin:'auto',width: 'auto', backgroundColor: 'white' , marginLeft:'389px',marginTop:'145px'}}>

       
    <div className="d-flex flex-column" style={{margin:'auto', width:'35rem'   }}>
    <div className="d-flex flex-row" style={{ justifyContent: 'space-between', boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)', backgroundColor: 'gray' }}>
        <span>New Message</span>
        <CloseIcon onClick={() => dispatch(closeSendMail())} style={{ cursor: 'pointer' }} />
    </div>
    <Form onSubmit={composeHandler}>
        <div className="d-flex flex-column" style={{ width: '100%', outline: '0', border: '0px', overflowY: 'auto' }}>
            <input style={{ outline: '0', border: '0px', boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)' }} type='email' placeholder="To" value={to} onChange={toHandler} />
            <input style={{ outline: '0', border: '0px', boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)' }} type='text' placeholder="Subject" value={subject} onChange={subjectHandler} />
            <textarea style={{ outline: '0', border: '0px', boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)' }} rows='10' onChange={messageHndler}>{message}</textarea>
        </div>

        <div className="d-flex">
            <Button type='submit'>Send</Button>
            <AttachFileIcon />
            <GifIcon />
            <TagFacesIcon />
            <MoreHorizIcon />
            {/* <Editor
                // editorState={editorState}
                // toolbarClassName="toolbarClassName"
                // wrapperClassName="wrapperClassName"
                // editorClassName="editorClassName"
                // onEditorStateChange={onEditorStateChange} 
            /> */}
            <DeleteIcon style={{ margin: 'auto', marginRight:'0px', cursor: 'pointer' }} />
        </div>
    </Form>
</div>
</div>
    )
    );
};

export default ComposeMail;
