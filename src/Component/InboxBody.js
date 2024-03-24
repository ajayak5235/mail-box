import "./EmailClass.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useDispatch } from "react-redux";
import { isDetailsOpen } from "../store/reducer/compose-slice";
import { openMessage } from "../store/reducer/email-details";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import FiberNewIcon from "@mui/icons-material/FiberNew";
import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, database } from "../firebase/firebaseConfig";

const InboxBody = (props) => {
  const { id, email, subject, message, time, read } = props;

  const dispatch = useDispatch();

  const handleEmailClick = () => {
    dispatch(isDetailsOpen());
    dispatch(
      openMessage({
        email,
        subject,
        message,
        time,
      })
    );
  };

  const deleteDocs = async (id) => {
    try {
      const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
      const messageDoc = doc(userDoc, "Inbox", `${id}`);
      console.log("", await deleteDoc(messageDoc));

      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteDocs(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
          height: "40px",
          cursor: "pointer",
          boxShadow: "1px 1px 3px gray",
        }}
        className="email-body"
        onClick={handleEmailClick}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "350px",
            padding: "5px",
          }}
        >
          <CheckBoxOutlineBlankIcon fontSize="small" />
          <LabelImportantIcon fontSize="small" />
          <h4 style={{ margin: "0", marginLeft: "1%" }}>{email}</h4>
        </div>
        <div
          style={{
            display: "flex",
            minWidth: "600px",
            alignItems: "center",
            padding: "12px",
          }}
        >
          <div style={{ width: "300px", display: "flex" }}>
            <p
              style={{
                margin: "0",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <b>{subject}</b> {message}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
          <p style={{ margin: "0" }}>{time}</p>
        </div>
      </div>
      <div style={{ marginLeft: "-13%" }}>
        <IconButton onClick={() => deleteHandler(id)}>
          <DeleteIcon />
        </IconButton>

        {!read && (
          <FiberNewIcon
            style={{ marginLeft: "-10%", color: "green" }}
          ></FiberNewIcon>
        )}
      </div>
    </div>
  );
};

export default InboxBody;
