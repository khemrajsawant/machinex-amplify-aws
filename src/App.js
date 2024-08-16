import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Authenticator } from '@aws-amplify/ui-react'
// // import '@aws-amplify/ui-react/styles.css'
// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
// import ResponsiveAppBar from "./components/AppbarComponent";
// import Home from "./pages/Home";
// import Login from "./components/Login"; // Adjust the path if needed
// const client = generateClient<Schema>();
// const App = () => {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);
//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }
//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id })
//   }
//   return (
//         <main>
//           <ResponsiveAppBar
//             pages={["Home"]}
//             guest={true}
//             isAuthenticatedUser={true}
//           />
//         </main>
//   );
// }
// export default App;
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./components/AppbarComponent";
import Container from "@mui/material/Container";
import RoutesAllComponent from "./components/RoutesAllComponent";
import CustomizedSnackbars from "./components/CustomizedSnackbars";
import { useSelector } from "react-redux";
import { isLoading } from "./redux/tableStateGenForm/master/masterReducer";
import { useAppDispatch } from "./redux/tableStateGenForm/store";
const App = (props) => {
    const dispatch = useAppDispatch();
    const [notification, setNotification] = useState({
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
    const open = useSelector((state) => state.master.isLoading);
    const handleCloseBackDrop = () => {
        console.log("dispatching isLoading");
        dispatch(isLoading());
    };
    console.log("runnig init data");
    // initData();
    useEffect(() => {
        try {
            google.script.run
                .withSuccessHandler(handleCloseBackDrop)
                .isLoadingSuccessful();
        }
        catch {
            handleCloseBackDrop();
            console.log("offline mode");
            alert("You are offline, try again");
        }
    }, [open]);
    const masterData = useSelector((state) => state.master);
    console.log("masterData", masterData);
    return (_jsxs(Container, { children: [_jsx(CustomizedSnackbars, { open: notification.open, severity: notification.severity, duration: 5000, message: notification.message, onChange: setNotificationFalse }), _jsx(CssBaseline, {}), _jsx(ResponsiveAppBar, { onLogout: props.onLogout, pages: props.pages, guest: false, onLoginModalOpen: props.onLoginModalOpen, isAuthenticatedUser: props.isAuthenticatedUser }), _jsx(RoutesAllComponent, {})] }));
};
export default App;
