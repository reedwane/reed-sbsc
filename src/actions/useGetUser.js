import axios from "axios";
import { useSetLoadingContext } from "../context/loadingContext";
import { useState, useEffect } from "react";

const useGetUser = () => {
  const url = "https://reqres.in/api/";
  const id = localStorage.getItem("id");
  const setLoading = useSetLoadingContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        axios.get(`${url}users/${id}`).then(
          (res) => {
            setData(res.data.data);
            setLoading(false);
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setLoading]);

  return { data };
};

export default useGetUser;
