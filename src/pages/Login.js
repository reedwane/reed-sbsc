import LoginForm from "../components/LoginForm";

const Login = () => {
  // const fire = () => {
  //   // axios.get("https://reqres.in/api/users/2").then(
  //   //   (res) => {
  //   //     console.log(res);
  //   //   },
  //   //   (err) => {
  //   //     console.log(err);
  //   //   }
  //   // );
  //   // axios.post("https://reqres.in/api/register", data).then(
  //   //   (res) => {
  //   //     console.log(res.data);
  //   //   },
  //   //   (error) => {
  //   //     console.log(error);
  //   //   }
  //   // );
  // };

  return (
    <div className="login">
      <h1>Login</h1>
      <LoginForm text="Login" />
    </div>
  );
};

export default Login;
