import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import { Authenticator } from '@aws-amplify/ui-react'
import outputs from "../../amplify_outputs.json";
import { updateAuthData } from "../redux/tableStateGenForm/master/masterReducer";
import { RootState, useAppDispatch } from "../redux/tableStateGenForm/store";
Amplify.configure(outputs);


import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';


interface LoginProps {
  open: boolean;
  handleKeyDown: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
}

const Login: React.FC<LoginProps> = ({ open, handleKeyDown, onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleLoginClick = async () => {
    setLoading(true);

    try {
      console.log("Triggering onLogin with ", email, " and ", password);
      onLogin(email, password);
      dispatch(updateAuthData({payload:[
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
      ], headerName:"ROUTES", labelName:"label"}));

    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    setLoading(false);
  };

  const setHandleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      handleKeyDown();
    }
  };

  return (
    <Modal open={open} onClose={onClose} onKeyDown={setHandleKey}>
      <Container
        component="main"
        maxWidth="xs"
        style={{ marginTop: "50vh", transform: "translateY(-50%)" }}>

        <Authenticator>
        {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
      
          <Button
              variant="contained"
              onClick={handleLoginClick}
              // disabled={!email || !password || loading}
            >
             Welcome to Machined, Click to proceed
            </Button>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}

   

        </Authenticator>
        {/* <Container
        component="main"
        maxWidth="xs"
        style={{ marginTop: "50vh", transform: "translateY(-50%)" }}
      >
        <Card>
          <CardContent
            style={{
              height: "12rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <Button
              variant="contained"
              onClick={handleLoginClick}
              disabled={!email || !password || loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </CardContent>
        </Card> */}
      </Container>
    </Modal>
  );
};

export default Login;
