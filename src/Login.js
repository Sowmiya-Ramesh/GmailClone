// import React, { useState } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import "./styles.css";

// function Login() {
//   const clientId =
//     "993447522119-6d0dkq4ugegf7hlvv4e9baf0f94gt4r3.apps.googleusercontent.com";

//   const [showloginButton, setShowloginButton] = useState(true);
//   const [showlogoutButton, setShowlogoutButton] = useState(false);
//   const onLoginSuccess = (res) => {
//     console.log("Login Success:", res.profileObj);
//     setShowloginButton(false);
//     setShowlogoutButton(true);
//   };

//   const onLoginFailure = (res) => {
//     console.log("Login Failed:", res);
//   };

//   const onSignoutSuccess = () => {
//     alert("You have been logged out successfully");
//     console.clear();
//     setShowloginButton(true);
//     setShowlogoutButton(false);
//   };

//   return (
//     <div className="login">
//       <div className="login_container">
//         <img
//           src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
//           alt=""
//         />
//       </div>
//       {showloginButton ? (
//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Sign In"
//           onSuccess={onLoginSuccess}
//           onFailure={onLoginFailure}
//           cookiePolicy={"single_host_origin"}
//           isSignedIn={true}
//         />
//       ) : null}

//       {showlogoutButton ? (
//         <GoogleLogout
//           clientId={clientId}
//           buttonText="Sign Out"
//           onLogoutSuccess={onSignoutSuccess}
//         ></GoogleLogout>
//       ) : null}
//     </div>
//   );
// }
// export default Login;

import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Login.css";
// import App from "./App.js";
function Login() {
  const clientId =
    "993447522119-6d0dkq4ugegf7hlvv4e9baf0f94gt4r3.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          className="img"
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />

        {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
}
export default Login;
