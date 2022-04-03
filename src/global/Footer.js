import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer footer--attribution">
        <p className="attribution-text">
          Created by{" "}
          <Link className="link footer--link" to="https://github.com/reedwane">
            Abudlkaeem Ridwan
          </Link>
        </p>
        <span>&copy; Ridwan Abdulkareem 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
