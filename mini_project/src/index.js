// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
   

//   </React.StrictMode>
// );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import SignupPage from "./SignupPage";   // ✅ ADD THIS LINE

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <SignupPage />
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthWrapper from "./AuthWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthWrapper />
  </React.StrictMode>
);
