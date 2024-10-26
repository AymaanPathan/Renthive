import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = () => {
    loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return <button onClick={handleRegister}>Register</button>;
};

export default RegisterButton;
