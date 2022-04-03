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
            <Link className="link nav--link" to="signup">
              Signup
            </Link>
            <Link className="link nav--link" to="login">
              Login
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
