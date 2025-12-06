import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupPage from "./components/Signup";  
import App from "./App";

function AuthWrapper() {
  const [user, setUser] = useState(null); 
  const [showSignup, setShowSignup] = useState(false);

  // If user is not logged in
  if (!user) {
    return (
      <>
        {showSignup ? (
          <SignupPage onBackToLogin={() => setShowSignup(false)} />
        ) : (
          <LoginForm
            onLogin={(loggedUser) => setUser(loggedUser)}
            onSignupClick={() => setShowSignup(true)}
          />
        )}
      </>
    );
  }

  // After login → load full project
  return <App user={user} />;
}

export default AuthWrapper;
