import axios from "axios";
import { useSetLoadingContext } from "../context/loadingContext";
import { useState, useEffect } from "react";

const useGetUsers = (page) => {
  const url = `https://reqres.in/api/users?page=${page}`;
  const setLoading = useSetLoadingContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        axios.get(url).then(
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
  }, [setLoading, url]);

  return { data };
};

export default useGetUsers;
