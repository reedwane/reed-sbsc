import useSignupLogin from "../hooks/useSignupLogin";

const LoginButton = (props) => {
  const text = props.text;
  const details = props.details;
  const id = props.id;

  const { handleSubmit } = useSignupLogin(text, details, id);

  return (
    <button
      className="button login--button"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {props.text}
    </button>
  );
};

export default LoginButton;
