import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";


import MainRoute from "./Router/MainRoute";

// Render react app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Toaster
      theme="dark"
      richColors
      closeButton
      toastOptions={{
        style: { background: "#050816", opacity: 0.95 },
      }}
    /> */}
    <MainRoute/>
  </React.StrictMode>
);



    
