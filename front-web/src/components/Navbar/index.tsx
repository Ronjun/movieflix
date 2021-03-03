import "./styles.scss";
import { ReactComponent as Logo } from "../../assets/popcorn.svg";
import { useHistory, useLocation } from "react-router-dom";
import { getAccessTokenDecoded, isAllowedByRole,  logout } from "../../Api/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  function onClick(event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) {
    history.push("/catalog");
  }

  function handleLogout(
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) {
    logout();
    history.replace("/login");
  }

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location]);

  return (
    <nav className="nav-container">
      <Logo className="nav-logo" />
      <h1 className="nav-text" onClick={onClick}>
        MovieFlix
      </h1>
      {currentUser 
        && isAllowedByRole(["ROLE_MEMBER"]) ? (
            <h1 className="nav-logout" onClick={handleLogout}>
              Sair
            </h1>
          )
        : (
            <h1 className="nav-logout" onClick={handleLogout}>
              Entrar
            </h1>
          )}
    </nav>
  );
}
