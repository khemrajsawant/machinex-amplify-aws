import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";



import { updateAuthData } from "../redux/tableStateGenForm/master/masterReducer";
import { useAppDispatch } from "../redux/tableStateGenForm/store";

import { Authenticator } from '@aws-amplify/ui-react'
import outputs from "../../amplify_outputs.json";
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource';
Amplify.configure(outputs);
const client = generateClient<Schema>();
import TestData from "../TestData.tsx";

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
    setEmail("")
    setPassword("")
   
    try {
      console.log("Triggering onLogin with ", email, " and ", password,"loading",loading);
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
  useEffect( () => {
    console.log("Init Data Hook useEffect");
    try {

       client.models.Todo.list().then((data) => {console.log("test",data)});
    } catch (error) {
      console.log("offline mode");
      alert("You are offline, try again");  
    }
  }, []);

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
          <TestData/>
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
