import React from "react";
import ReactDOM from "react-dom";
import { PatientProvider } from "./PatientContext"

import App from "./App";


ReactDOM.render(
    <PatientProvider>
        <App />
    </PatientProvider>, 
    document.getElementById("root")
);
