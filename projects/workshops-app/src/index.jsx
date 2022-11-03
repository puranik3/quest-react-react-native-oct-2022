// Webpack allows us to import CSS files
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Application from "./components/App";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Application />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
