import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow.js";
import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section.js";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

function EmailList() {
  const history = useHistory();
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settings_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settings_right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList_list">
        <EmailRow
          title="MS in USA"
          subject="List of best value universities"
          description="not all universities require top-of-the-class"
          time="10pm"
        />
        <EmailRow
          title="Hello"
          subject="Hey bangtan"
          description="This is me.. hsabl N Lbbhb Kowjdwqu qnwhbdqb dhqbiqi nqnc"
          time="10pm"
        />
        <EmailRow
          title="
          Talent.com "
          subject="Sowmiya, This Software Engineer Position is For You"
          description="Your Talent․com daily job alert for Software Engineer"
          time="10pm"
        />
        <EmailRow
          title="LinkedIn"
          subject="LinkedIn Job Alerts"
          description="30+ new jobs in Worldwide match your preferences."
          time="10pm"
        />
        <EmailRow
          title="Project"
          subject="Final report"
          description="Reference journals has been sent"
          time="8am"
        />
        <EmailRow
          title="Zen Class"
          subject="WeekEnd Schedule"
          description="Your class time and topics are attached below."
          time="3pm"
        />
        <EmailRow
          title="Zoho"
          subject="InterView Update"
          description="Congrats, you have qualified to the upcoming interviews..!!"
          time="10pm"
        />
      </div>
      <IconButton onClick={() => history.push("/")}>
        <ArrowBackIcon />
      </IconButton>
    </div>
  );
}
export default EmailList;
