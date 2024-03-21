
import './EmailClass.css'
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const EmailBody = (props) => {
    
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
   
        padding: "2px", 
        height: "40px",
        cursor: "pointer",
       boxShadow:'1px 1px 3px gray', 
   
      }} className="email-body"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: "300px",
          padding: "5px",
        }}
      >
        <CheckBoxOutlineBlankIcon fontSize="small" />
        <LabelImportantIcon fontSize="small" />
        <h4 style={{ margin: "0", marginLeft: "5px",  }}>{props.email}</h4>
      </div>
     


<div style={{ minWidth: "650px", alignItems: "center", padding: "5px" }}>
  <div style={{ width: "300px", display: 'flex' }}>
    <p style={{
      margin: "0",
      overflow: "hidden",
      whiteSpace: "nowrap", // Prevent text wrapping
      textOverflow: "ellipsis", // Display ellipsis when text overflows
    }}>
      <b>{props.subject}</b> {props.message}
    </p>
  </div>
</div>
      <div style={{  alignItems: "center", padding: "5px", flex:'40%' }}>
        <p style={{ margin: "0", }}>{props.time}</p>
      </div>
    </div>
  );
};

export default EmailBody;





