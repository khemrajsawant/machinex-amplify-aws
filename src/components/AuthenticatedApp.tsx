// AuthenticatedApp.js
import * as React from "react";
import App from "../app.js"; // Replace with the actual path to your App component
import Login from "./Login"; // Replace with the actual path to your Login component
import { useSelector, useDispatch } from "react-redux";
import { updateAuthData } from "../redux/tableStateGenForm/master/masterAction";
import Home from "../pages/Home.js";
import ResponsiveAppBar from "./AppbarComponent.js";
import Container from "@mui/material/Container";
// import MaintenanceToaster from "./MaintenanceToaster.js";

function AuthenticatedApp() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [pages, setPages] = React.useState(["Home"]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const setAccess = (k) => {
    if (email != "" || password != "") {
      console.log(k);

      setPages(k[0]);
      dispatch(updateAuthData(k, "ROUTES", "label"));
      if (k[3].email != "") {
        if (k[3].isRegistered === false) {
          alert(
            "Please contact Admin for accessing the App, You will be redirected to homepage"
          );
          setAuthenticated(true);
          setOpen(false);
        } else if (k[3].isAuthenticated === true) {
          setAuthenticated(true);
          setOpen(false);
        } else if (k[3].isWrogPassword === true) {
          alert("Wrong Password, Try again or contact Admin for new Pasword");
        }
      } else {
        // setAuthenticated(false);
      }
    }
  };

  React.useEffect(() => {
    if (email == "" || password == "") {
      console.log("Yet to submit login info?");
      setAuthenticated(false);
    } else {
      try {
        google.script.run
          .withSuccessHandler(setAccess)
          .withFailureHandler((er) => {
            alert(er);
          })
          .getRoutesForRole(email, password);
      } catch (error) {
        setAccess(k=[
          [
              "home",
              "master",
              "transactions",
              "reports"
          ],
          {
              "ROLE": "Admin",
              "MASTERS": [
                  "Company_Information",
                  "Employee_Master",
                  "Account_Master",
                  "Item_Master",
                  "Workstation_Master",
                  "Machine_Master",
                  "General_Work_List"
              ],
              "TRANSACTIONS": [
                  "Work_Order",
                  "Daily_Work_Report",
                  "Job_Work_Order",
                  "Job_Work_Receipt",
                  "Sale_Challan",
                  "Payment",
                  "Rejection"
              ],
              "REPORTS": [
                  ""
              ]
          },
          true,
          {
              "isRegistered": true,
              "email": "khemrajsawantmorye@gmail.com",
              "isAuthenticated": true
          }
      ])
        console.error(error); // You might send an exception to your error tracker like AppSignal
      }
    }
  }, [email, password]);

  const handleLogin = (email, password) => {
    console.log(email, password);
    setEmail(email);
    setPassword(password);

    console.log("email", email, "password", password);

    // Perform authentication logic here (e.g., call server, validate credentials)
    // If authentication is successful, setAuthenticated(true)
    // Otherwise, show an error message
    // For simplicity, we'll just set authenticated to true for now
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear authentication token, reset state)
    setAuthenticated(false);
  };

  // setting Logout - authetication flag is set to false
  const handleOpenModal = (e) => {
    setOpen(!open)
    if(e=='Logout'){
      setAuthenticated(false)
    }
  }
  console.log("authenticated", authenticated);
  return (
    <div>
      {/* <MaintenanceToaster/> */}
      {authenticated ? (
        <App onLogout={handleLogout} pages={pages} onLoginModalOpen={handleOpenModal} isAuthenticatedUser={authenticated} />
      ) : (
        <Container>
          <ResponsiveAppBar pages={["Home"]} guest={true} onLoginModalOpen={handleOpenModal} isAuthenticatedUser={authenticated} />
          <Home />
          <Login onLogin={handleLogin} open={open} handleKeyDown={()=>{setOpen(false)}}/>
        </Container>


      )}
    </div>
  );
}

export default AuthenticatedApp;
