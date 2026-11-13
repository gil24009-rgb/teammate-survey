import React from "react";
import { createRoot } from "react-dom/client";
import Survey from "./Survey";
import "./style.css";
createRoot(document.getElementById("root")!).render(<React.StrictMode><Survey /></React.StrictMode>);
