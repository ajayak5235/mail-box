import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { doc, collection, addDoc } from "firebase/firestore";
import { database } from "../firebase/firebaseConfig";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GifIcon from "@mui/icons-material/Gif";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { closeSendMail } from "../store/reducer/compose-slice";
import { auth } from "../firebase/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const ComposeMail = () => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const send = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Send");
    try {
      await addDoc(messageRef, {
        to,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const composeHandler = async (e) => {
    e.preventDefault();

    if (to === "") {
      return alert("To is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }
    if (message === "") {
      return alert("Message is required");
    }

    try {
      const userDoc = doc(database, "Users", `${to}`);
      const messageRef = collection(userDoc, "Inbox");
      await addDoc(messageRef, {
        to: auth.currentUser.email,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        unread: false,
      });
      send();

      alert("Email sent successfully");
      setTo("");
      setSubject("");
      setMessage("");
      dispatch(closeSendMail());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="d-flex"
      style={{
        margin: "auto",
        width: "auto",
        backgroundColor: "white",
        marginLeft: "200px",
        marginTop: "145px",
      }}
    >
      <div
        className="d-flex flex-column"
        style={{ margin: "auto", width: "35rem" }}
      >
        <div
          className="d-flex flex-row"
          style={{
            justifyContent: "space-between",
            boxShadow: "inset 0 -1px 0 rgb(100 121 143/70%)",
            backgroundColor: "gray",
          }}
        >
          <span>New Message</span>
          <CloseIcon
            onClick={() => dispatch(closeSendMail())}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Form onSubmit={composeHandler}>
          <div
            className="d-flex flex-column"
            style={{
              width: "100%",
              outline: "0",
              border: "0px",
              overflowY: "auto",
            }}
          >
            <input
              style={{
                outline: "0",
                border: "0px",
                boxShadow: "inset 0 -1px 0 rgb(100 121 143/70%)",
              }}
              type="email"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              style={{
                outline: "0",
                border: "0px",
                boxShadow: "inset 0 -1px 0 rgb(100 121 143/70%)",
              }}
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              style={{
                outline: "0",
                border: "0px",
                boxShadow: "inset 0 -1px 0 rgb(100 121 143/70%)",
              }}
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div className="d-flex">
            <Button type="submit">Send</Button>
            <AttachFileIcon />
            <GifIcon />
            <TagFacesIcon />
            <MoreHorizIcon />
            <DeleteIcon
              style={{ margin: "auto", marginRight: "0px", cursor: "pointer" }}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ComposeMail;
