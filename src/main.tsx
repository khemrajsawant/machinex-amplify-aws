import React from "react";
import ReactDOM from "react-dom/client";
import AuthenticatedApp from "./components/AuthenticatedApp";
// import "./index.css";
// import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/tableStateGenForm/store.ts";
import InitData from "./components/InitData.tsx";

Amplify.configure(outputs);
import AccountMasterFormCreateForm from '../ui-components/AccountMasterFormCreateForm'
import AccountMasterFormUpdateForm from '../ui-components/AccountMasterFormUpdateForm'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          {/* <Authenticator> */}
          {/* <InitData/> */}
          <AccountMasterFormCreateForm/>
          <AccountMasterFormUpdateForm id='e058dfbb-4640-491f-9abd-6478983d45fe'/>
            {/* <AuthenticatedApp /> */}
          {/* </Authenticator> */}
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
