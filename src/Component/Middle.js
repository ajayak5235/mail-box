import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Middle = () => {
  return (
    <div style={{ marginLeft: "20%", display: "flex" , outline:'0',boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)' }}>
      <div style={{ display: "flex", flexDirection: "row" , boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)'}}>
        <IconButton>
          <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon></ArrowDropDownIcon>
        </IconButton>
        <IconButton>
          <RefreshIcon></RefreshIcon>
        </IconButton>
        <IconButton>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      </div>
      <div style={{ display: "flex", flexDirection: "row" ,marginLeft:'930%', boxShadow: 'inset 0 -1px 0 rgb(100 121 143/70%)'}}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Middle;
