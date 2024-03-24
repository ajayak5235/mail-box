import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarRateIcon from '@mui/icons-material/StarRate'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { openSendMail } from '../store/reducer/compose-slice';
import { useDispatch } from 'react-redux';
import { isSentBoxOpen } from '../store/reducer/email-details';
import { isSentBoxClose } from '../store/reducer/email-details';
import { isInboxClose } from '../store/reducer/email-details';
import { isInboxOpen } from '../store/reducer/email-details';
const LeftSide = (props) => {


    const dispatch = useDispatch()

    const sentBoxOpen = () =>{
       dispatch(isInboxClose())
        dispatch(isSentBoxOpen())

    }
    const inInboxOpen = () =>{
     
        dispatch(isSentBoxClose())
        dispatch(isInboxOpen())
    }
   
    return (
        <div style={{ backgroundColor: '#F9F9F9', minHeight: '90vh' , alignItems:'center'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}></div>
            <Button
                startIcon={<CreateIcon />}
                style={{
                    backgroundColor:'#BEE0FF',
                    fontWeight:'bold',
                    padding: '5px 20px',
                    borderRadius: '20px',
                    boxShadow: '2px 2px 3px',
                    marginTop: '20px',
                    marginLeft: '-70.1px',
                    maxWidth: '150px',
                    textTransform: 'none' 
                }}
                onClick={() => dispatch(openSendMail())}
            >
                Compose
            </Button>
            
            <div style={{ display: 'flex', alignItems: 'center' }}></div>
            <Button
            onClick={()=> {inInboxOpen()}}
             startIcon={<InboxIcon />}
                style={{
                    color:'black',
                  
               
                    
                    borderRadius:'18px',
                    marginLeft: '-110.1px',
                    marginTop: '10px',
                   
                   
                    textTransform: 'none' 
                }}
            >
                
                Inbox&nbsp;<b style={{color:'red'}}>{props.length}</b>
            </Button>
            <div style={{ display: 'flex', alignItems: 'center' }}></div>
            <Button
         startIcon={<StarRateIcon></StarRateIcon>}
                style={{
                    color:'black',
                   
                    
                    marginLeft: '-110.1px',
                    marginTop: '0.1px',
                   
                   
                    textTransform: 'none' 
                }}
            >
                Starred
            </Button>
            <div style={{ display: 'flex', alignItems: 'center' }}></div>
            <Button
             startIcon={<AccessTimeFilledIcon />}
                style={{
                    color:'black',
           
                    
                    marginLeft: '-99.1px',
                    marginTop: '0px',
                   
                   
                    textTransform: 'none' 
                }}
            >
                Snoozed
            </Button>
            <div style={{ display: 'flex', alignItems: 'center' }}></div>
            <Button
            onClick={()=> sentBoxOpen()}
                startIcon={<SendIcon></SendIcon>}
                style={{
                    color:'black',
         
                    
                    marginLeft: '-115.1px',
                    marginTop: '0px',
                   
                   
                    textTransform: 'none' 
                }}
            >
                Sent
            </Button>
            

            <div style={{ display: 'flex', alignItems: 'center' }}></div>
            <Button
                startIcon={<ExpandMoreIcon></ExpandMoreIcon>}
                style={{
                    color:'black',
         
                    
                    marginLeft: '-120.1px',
                    marginTop: '0px',
                   
                   
                    textTransform: 'none' 
                }}
            >
                More
            </Button>
            
        </div>
    );
}

export default LeftSide;
