import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetDataContext } from "../context/dataContext";
import { useSetLoadingContext } from "../context/loadingContext";

const useSignupLogin = (text, details, id) => {
  const { email, password, emailError, passwordError } = details;
  const navigate = useNavigate();
  const setLoading = useSetLoadingContext();
  const setData = useSetDataContext();

  const handleSubmit = () => {
    let baseUrl = "https://reqres.in/api/",
      url;
    // modify the api url if the visitor is singning in or logging in from the text on the button
    text === "SignUp"
      ? (url = `${baseUrl}register`)
      : (url = `${baseUrl}login`);

    const data = {
      email: email,
      password: password,
    };

    if (!passwordError) {
      //if the password and other input is already validated
      try {
        axios.post(url, data).then((res) => {
          setLoading(true);
          setData(res.data);
          localStorage.setItem("data", JSON.stringify(res.data));
          localStorage.setItem("id", id);
          setLoading(false);
          navigate("/");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { handleSubmit }; // return this function
};

export default useSignupLogin;
