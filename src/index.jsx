import React from "react";
import ReactDOMClient from "react-dom/client";
import { InvestigationScreen } from "./screens/InvestigationScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<InvestigationScreen />);
