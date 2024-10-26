import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      const userId = user.sub; // Extract user ID
      const userName = user.nickname; // Extract user nickname
      const userEmail = user.email; // Extract user email
      const userImage = user.picture; // Extract user profile image

      // Save user data to local storage
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userImage", userImage);

      // Send userId and userName to backend
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, userName }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [isAuthenticated, user]);

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
