import { Avatar, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { isDetailsClose} from '../store/reducer/compose-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selected } from '../store/reducer/email-details';

const EmailDetails = () =>{
    const mail = useSelector(state => state.sendMess.selectedMessage)



    const dispatch = useDispatch()
 
    const handleEmailClick = () => {
        dispatch(isDetailsClose());
      };

    return (
    

        <div style={{ display: 'flex', border: '1px Solid #aaa', width: '50rem', height: '20rem', marginTop: '10%', marginLeft:'-10%', backgroundColor: 'white',}}>
  
        <div style={{ display:'flex',boxShadow: 'inset 0 -1px 0 0 rgb(100 121 143/10%), inset 1px 0 0 0 rgb(100 121 143/10%)' , alignItems:'center', flexDirection:'row', marginTop:'-34%', }}>
        <div style={{display:'flex', marginTop:'-10%'}}>
        <IconButton onClick={handleEmailClick}>
                <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
             </IconButton>
        </div>
            <div style={{display:'flex', marginTop:'15%', marginLeft:'-8%'}}>
            <IconButton>
            <Avatar />
          </IconButton>
          <div style={{display:'flex',  flexDirection: 'column' }}>
          <h6 style={{fontSize:'.8rem', marginBottom:'-5px'}}>{mail.email}</h6>
          <IconButton style={{fontSize:'.8rem', marginBottom:'-15px',}}>
            <p style={{marginBottom:'4px'}}>To</p>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </IconButton>
          </div>

          <div style={{display:'flex',marginLeft:'180%'}}>
            <IconButton>
                <StarBorderIcon></StarBorderIcon>
            </IconButton>
            <IconButton>
          <ChevronLeftIcon></ChevronLeftIcon>
            </IconButton>
            <IconButton>
                <ChevronRightIcon></ChevronRightIcon>
            </IconButton>
          </div>
            </div>
        
      
        </div>
   

        <div style={{ display: 'flex', margin: 'auto', marginLeft: '-29%', marginTop: '10%', width: '100%', flexWrap: 'wrap' }}>
    <p>{mail.message}</p>
  </div>
      </div>

    )
    
}

export default EmailDetails;