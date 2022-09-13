import React from "react";
import * as ReactDOM from 'react-dom/client'
import "./styles.css";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<App/>)