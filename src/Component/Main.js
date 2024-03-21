

import EmailBody from "./EmailBody";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import NavBar from "./Navbar";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ComposeMail from "./Compose";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import EmailDetails from "./EmailsInboxDetails";

const Main = () => {
const selector = useSelector(state => state.isOpen.isSendMailOpen)
const [emails, setEmails] = useState([])

useEffect(() =>{
db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
  setEmails(snapshot.docs.map(doc =>({
    id:doc.id,
    data:doc.data()
  })))
})
},[])

console.log(emails)
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={2}>
          <LeftSide />
        </Grid>
        <Grid item xs={1}>
          <Middle />
          {emails.map(({id, data})=>{
             return ( <div key={id} style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginLeft:'500%'}}>
             <EmailBody email={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
             </div>)
          })}
         
         
        
         
        </Grid>
        <Grid>
            <div>
            {selector && <ComposeMail></ComposeMail>}
            </div>
           
        </Grid>
        <Grid>
          <div>
            <EmailDetails></EmailDetails>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
