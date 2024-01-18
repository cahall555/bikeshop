import * as React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
