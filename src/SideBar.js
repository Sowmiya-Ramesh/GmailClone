import React from "react";
import "./sidebar.css";
import SideBarOptions from "./SideBarOptions.js";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useHistory } from "react-router-dom";
function SideBar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => history.push("/compose")}
      >
        COMPOSE
      </Button>
      <SideBarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={78}
        selected={true}
      />
      <SideBarOptions Icon={StarIcon} title="Starred" number={78} />
      <SideBarOptions Icon={AccessTimeIcon} title="Snoozed" number={78} />
      <SideBarOptions Icon={LabelImportantIcon} title="Important" number={78} />
      <SideBarOptions Icon={NearMeIcon} title="Sent" number={78} />
      <SideBarOptions Icon={NoteIcon} title="Drafts" number={78} />
      <SideBarOptions Icon={ExpandMoreIcon} title="More" number={78} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
