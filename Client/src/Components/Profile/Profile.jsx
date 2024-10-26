import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const saveUserData = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        const userData = {
          name: user.name,
          email: user.email,
          auth0Id: user.sub,
          password: user.nickname,
        };

        await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(userData),
        });
      }
    };

    saveUserData();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return isAuthenticated ? (
    <div>Welcome, {user.name}!</div>
  ) : (
    <div>Not logged in</div>
  );
};

export default Profile;
