import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import store from './redux/store'
import './index.css'
import { UserProvider } from './UserProvider'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(

    // <Provider store={store}>
    <UserProvider>
        <StrictMode>

            <App />

        </StrictMode>
    </UserProvider>

    // </Provider>

);
