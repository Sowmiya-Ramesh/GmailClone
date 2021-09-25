import "./styles.css";
import React from "react";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Mail from "./Mail.js";
import EmailList from "./EmailList.js";
import SendMail from "./SendMail.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app_body">
          <SideBar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
            <Route path="/compose">
              <SendMail />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
    //   <div className="App">

    //     <Header />
    //     <div className="app_body">
    //       <SideBar />
    //       <Switch>
    //         <Route path="/mail">
    //           <Mail />
    //         </Route>
    //         <Route path="/">
    //           <EmailList />
    //         </Route>
    //         <Route path="/compose">
    //           <SendMail />
    //         </Route>
    //       </Switch>
    //     </div>
    //     <SendMail />
    //   </div>

    // </Router>
  );
}
export default App;

// import React from "react";
//import "./Mail.css";
// function SideBar(){
//   return(
//     <div className="7">

//     </div>
//   )
// }
// export default SideBar;
