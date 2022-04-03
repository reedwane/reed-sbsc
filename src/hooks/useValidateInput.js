import { useState } from "react";

const useValidateInput = (e) => {
  const [id, setId] = useState("2");

  // to set multiple states for the inputs in the form
  const [state, setState] = useState({
    email: "eve.holt@reqres.in",
    password: "",
    emailError: false, // couldnt properly validate since the emails are predefined
    passwordError: true,
    // id: "2",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "email") {
      setId(e.target.options[e.target.selectedIndex].dataset.id); // store the id
    }

    setState({
      ...state,
      [e.target.name]: value, //set value according to the name of the target input
      // id: [e.target.dataset.id],
    });
  };

  // to handle login/signup input error
  const handleError = (e) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // at least one uppercase, one lowercase, one number/special character, 8 chars long
    // example: Abcdefge@
    const passwordRegex =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (e.target.name === "email") {
      setState({
        ...state,
        emailError: !emailRegex.test(state.email),
      });
    } else {
      setState({
        ...state,
        passwordError: !passwordRegex.test(state.password),
      });
    }
  };

  const validators = {
    state,
    handleChange,
    handleError,
    id,
  };

  return validators;
};

export default useValidateInput;
