import { Link } from "react-router-dom";
import { useDataContext, useSetDataContext } from "../context/dataContext";

const Header = () => {
  const data = useDataContext();
  const setData = useSetDataContext();

  const handleLogout = () => {
    localStorage.clear();
    setData(null);
  };

  return (
    <header className="header">
      <h2 className="header--logo">reedwane</h2>

      <nav className="nav">
        {!data && (
          <>
            <Link className="link nav--link nav-login" to="login">
              Login
            </Link>

            <Link className="link nav--link nav-signup" to="signup">
              Signup
            </Link>
          </>
        )}

        {data && (
          <>
            <Link className="link nav--link" to="/">
              My Account
            </Link>
            <Link className="link nav--link" to="users">
              Users
            </Link>
            <Link className="link nav--link" to="login" onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
