import EmailBody from "./EmailBody";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import NavBar from "./Navbar";
import { Grid, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import ComposeMail from "./Compose";
import { useEffect, useState } from "react";
import EmailDetails from "./EmailsInboxDetails";
import { collection, doc, getDocs, updateDoc, query, orderBy } from "firebase/firestore";
import { auth, database } from "../firebase/firebaseConfig";
import InboxBody from "./InboxBody";

const Main = (props) => {
  const selector = useSelector((state) => state.isOpen.isSendMailOpen);
  const isBoxOpen = useSelector((state) => state.sendMess.isSentBoxOpen);
  const isInboxOpen = useSelector((state) => state.sendMess.isInboxOpen);

  const selectDetails = useSelector((state) => state.isOpen.isDetailsMail);

  const [emails, setEmails] = useState([]);
  const [inBox, setInbox] = useState([]);

  const getMail = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = collection(userDoc, "Inbox");
    try {
      const data = await getDocs(messageDoc);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(">>>.", data);
      setEmails(filteredData);
    } catch (err) {
      console.error(err);
    }
  };




  useEffect(() => {
    getMail();
  }, []);

  const getSendMail = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = collection(userDoc, "Send");
    try {
      const data = await getDocs(messageDoc);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("inboxfiltered", filteredData);
      setInbox(filteredData);
    } catch (err) {
      console.error(err);
    }
  };


  



  useEffect(() => {
    getSendMail();
  }, []);

  const readMessage = async (id) => {
    try {
      const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
      const messageDoc = doc(userDoc, "Inbox", `${id}`);
      await updateDoc(messageDoc, {
        unread: true,
      });

      console.log("Message marked as read successfully");
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const length = emails.length;

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={2}>
          <LeftSide length={length} />
        </Grid>
        <Grid item xs={1}>
          <Middle />

          <Grid>
            {isInboxOpen &&
              emails.map(({ id, to, subject, message, timestamp, unread }) => {
                return (
                  <div
                    key={id}
                    onClick={() => readMessage(id)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginLeft: "500%",
                    }}
                  >
                    <InboxBody
                      email={to}
                      subject={subject}
                      message={message}
                      time={new Date(
                        timestamp?.seconds * 1000
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      id={id}
                      read={unread}
                    />
                  </div>
                );
              })}
          </Grid>

          {isBoxOpen &&
            inBox.map(({ id, to, subject, message, timestamp }) => {
              return (
                <div
                  key={id}
                  onClick={() => readMessage(id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "500%",
                  }}
                >
                  <EmailBody
                    email={to}
                    subject={subject}
                    message={message}
                    time={new Date(
                      timestamp?.seconds * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    id={id}
                    read={true}
                  />
                </div>
              );
            })}
        </Grid>

        <Grid>
          <div>{selector && <ComposeMail></ComposeMail>}</div>
        </Grid>
        <Grid>
          <div>{selectDetails && <EmailDetails></EmailDetails>}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
