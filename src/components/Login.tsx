// Login.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

const Login = ({ onLogin, open, handleKeyDown }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginClick = async () => {
    // Set loading to true when the login button is clicked
    setLoading(true);

    try {
      // Perform login logic here (e.g., validate credentials, call server)
      // If authentication is successful, call onLogin
      console.log("Triggering onLogin with ", email, " and ", password);
      await onLogin(email, password);

      // If onLogin succeeds, set loading to false
      // setLoading(false);
    } catch (error) {
      // Handle authentication error here if needed
      console.error("Authentication error:", error);

      // Set loading to false in case of an error
      setLoading(false);
    }
  };

  const onClose = () => {setLoading(false);};

  const setHandleKey = (e) => {
    // Close the modal if the Escape key is pressed
    if (e.key === "Escape") {
      handleKeyDown();
    }
  };

  console.log("Login openModal", open);

  return (
    <Modal open={open} onClose={onClose} onKeyDown={setHandleKey}>
      <Container
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
            {/* <Link to="/forgot-password">Forgot Password?</Link> */}
          </CardContent>
        </Card>
      </Container>
    </Modal>
  );
};

export default Login;
