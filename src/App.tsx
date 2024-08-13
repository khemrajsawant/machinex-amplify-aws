

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";


import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import initData from "./services/initData";
import RoutesAllComponent from "./components/RoutesAllComponent";
// import CustomizedSnackbars from "./components/CustomizedSnackbars";

import { useDispatch, useSelector } from "react-redux";
// import CustomizedBackdrop from "./components/CustomizedBackdrop";
// import { isLoading } from "./redux/tableStateGenForm/master/masterAction";



import ResponsiveAppBar from "./components/AppbarComponent";

interface NotificationState {
  open: boolean;
  severity: "info" | "success" | "warning" | "error";
  message: string;
}

interface AppProps {
  onLogout: () => void;
  pages: string[];
  onLoginModalOpen: () => void;
  isAuthenticatedUser: boolean;
}

const client = generateClient<Schema>();

const App: React.FC<AppProps> = (props) => {

  const dispatch = useDispatch();

  /**Loading initial Data */

  const [notification, setNotification] = useState<NotificationState>({
    open: true,
    severity: "info",
    message: "Loading..., Please wait",
  });

  const setNotificationFalse = () => {
    setNotification({
      open: false,
      severity: "success",
      message: "Loading Complete",
    });
  };

  const open = useSelector((state: any) => state.master.isLoading);

  const handleCloseBackDrop = () => {
    console.log("dispatching isLoading");
    // dispatch(isLoading());
  };

  useEffect(() => {
    // initData();
    try {
      google.script.run
        .withSuccessHandler(handleCloseBackDrop)
        .isLoadingSuccessful();
    } catch {
      handleCloseBackDrop();
      console.log("offline mode");
      alert("You are offline, try again");
    }
  }, [open]);

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }


  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
    <Container>
      {/* {open && <CustomizedBackdrop open={open} />} */}
      {/* <CustomizedSnackbars
        open={notification.open}
        severity={notification.severity}
        duration={5000}
        message={notification.message}
        onChange={setNotificationFalse}
      /> */}
      <CssBaseline />
      <ResponsiveAppBar
        // onLogout={props.onLogout}
        // pages={props.pages}
        // guest={false}
        // onLoginModalOpen={props.onLoginModalOpen}
        // isAuthenticatedUser={props.isAuthenticatedUser}
      />
      <RoutesAllComponent />
    </Container>
          {/* <h1>{user?.signInDetails?.loginId}'s todos</h1> */}
          {/* <button onClick={createTodo}>+ new</button> */}
          {/* <ul>
            {todos.map((todo) => (
              <li onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.content}</li>
            ))}
          </ul> */}

          <button onClick={signOut}>Sign out</button>
        </main>

      )}
    </Authenticator>
  );
}

export default App;
