import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h3>Sorry, this page can not be found</h3>
      <Link to="/">Go back to home</Link>
    </>
  );
};

export default Error;
