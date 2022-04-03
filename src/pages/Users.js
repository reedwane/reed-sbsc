import useAuth from "../hooks/useAuth";
import { useLoadingContext } from "../context/loadingContext";
import useGetUsers from "../actions/useGetUsers";
import Loading from "../components/Loading";
import { useState } from "react";
import PageNumbers from "../components/PageNumbers";

const Users = () => {
  const loading = useLoadingContext();
  const [page, setPage] = useState(1);

  useAuth();
  const handlePage = (e, n) => {
    e.preventDefault();
    window.scrollTo({
      //scroll to top
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    setPage(n);
  };

  const res = useGetUsers(page);
  const data = res.data;
  console.log(data);

  return (
    <div className="users">
      <h1>Users</h1>

      {loading && <Loading />}

      {data && (
        <div className="users-list">
          {data.map((entry) => (
            <div key={entry.id} className="users user--card">
              <img
                className="users user--avatar"
                src={entry.avatar}
                alt={entry.first_name}
              />

              <h3 className="users user--first-name">
                First Name: {entry.first_name}
              </h3>
              <h3 className="users user--last-name">
                Last Name: {entry.last_name}
              </h3>
              <p className="users user--email">Email: {entry.email}</p>
            </div>
          ))}
        </div>
      )}

      <PageNumbers handlePage={handlePage} />
    </div>
  );
};

export default Users;
