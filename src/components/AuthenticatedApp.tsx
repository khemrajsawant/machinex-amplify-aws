import * as React from "react";
import App from "../App"; // Adjust the path if needed
import Login from "./Login"; // Adjust the path if needed
import Home from "../pages/Home";
import ResponsiveAppBar from "./AppbarComponent";
import Container from "@mui/material/Container";
import { updateAuthData } from "../redux/tableStateGenForm/master/masterReducer";
import { useAppDispatch } from "../redux/tableStateGenForm/store";

// Define types for the props and state
interface AuthenticatedAppProps { }

const AuthenticatedApp: React.FC<AuthenticatedAppProps> = () => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const [pages, setPages] = React.useState<string[]>(["Home"]);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const setAccess = (k: any) => {
    if (email !== "" && password !== "") {
      console.log(k);

      setPages(k[0]);
      dispatch(updateAuthData({payload:k, headerName:"ROUTES", labelName:"label"}));
      if (k[3].email !== "") {
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
          alert("Wrong Password, Try again or contact Admin for new Password");
        }
      }
    }
  };

  React.useEffect(() => {
    if (email === "" || password === "") {
      console.log("Yet to submit login info?");
      setAuthenticated(false);
    } else {
      try {
        // @ts-ignore
        google.script.run
          .withSuccessHandler(setAccess)
          .withFailureHandler((er: any) => {
            alert(er);
          })
          .getRoutesForRole(email, password);
      } catch (error) {
        setAccess([
          ["home", "master", "transactions", "reports"],
          {
            ROLE: "Admin",
            MASTERS: [
              "Company_Information",
              "Employee_Master",
              "Account_Master",
              "Item_Master",
              "Workstation_Master",
              "Machine_Master",
              "General_Work_List",
            ],
            TRANSACTIONS: [
              "Work_Order",
              "Daily_Work_Report",
              "Job_Work_Order",
              "Job_Work_Receipt",
              "Sale_Challan",
              "Payment",
              "Rejection",
            ],
            REPORTS: [""],
          },
          true,
          {
            isRegistered: true,
            email: "khemrajsawantmorye@gmail.com",
            isAuthenticated: true,
          },
        ]);
        console.error(error); // You might send an exception to your error tracker like AppSignal
      }
    }
  }, [email, password]);

  const handleLogin = async (email: string, password: string): Promise<void> => {
    console.log(email, password);
    setEmail(email);
    setPassword(password);
    setAuthenticated(true);
    setOpen(false);
    return Promise.resolve();
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const handleOpenModal = (e: string) => {
    setOpen(!open);
    if (e === "Logout") {
      setAuthenticated(false);
    }
  };

  console.log("authenticated", authenticated);
  return (
    <div>
      {/* <MaintenanceToaster/> */}
      
      {authenticated ? (
        <App onLogout={handleLogout} pages={pages} onLoginModalOpen={handleOpenModal} isAuthenticatedUser={authenticated}
        />

      ) : (
        <Container>
          <ResponsiveAppBar
            pages={["Home"]} guest={true} onLoginModalOpen={handleOpenModal} isAuthenticatedUser={authenticated}
          />
          <Home />
          <Login
            onLogin={handleLogin}
            open={open}
            handleKeyDown={() => setOpen(false)}
          />
        </Container>
      )}
    </div>
  );
};

export default AuthenticatedApp;
