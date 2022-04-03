import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDataContext, useSetDataContext } from "../context/dataContext";

const useAuth = () => {
  const navigate = useNavigate();
  const data = useDataContext();
  const setData = useSetDataContext();

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      navigate("/login"); // go to login if the user doesnt have a token stored
    } else {
      if (!data) setData(localStorage.getItem("data")); // restore the data to the state if incase the browser was refreshed
    }
  }, []);
};

export default useAuth;
