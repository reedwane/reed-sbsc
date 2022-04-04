import useGetUser from "../actions/useGetUser";
import { useLoadingContext } from "../context/loadingContext";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const Home = () => {
  useAuth();

  const loading = useLoadingContext();

  const res = useGetUser();
  const data = res.data;

  return (
    <div className="user">
      <h1>My Account</h1>
      {loading && <Loading />}

      {data && (
        <>
          <img
            className="image user--avatar"
            src={data.avatar}
            alt={data.name}
          />
          <h2 className="user-text user--first--name">
            First Name: {data.first_name}
          </h2>
          <h2 className="user-text user--last--name">
            Last Name: {data.last_name}
          </h2>
          <p className="user-text user--email">Email: {data.email}</p>
        </>
      )}
    </div>
  );
};

export default Home;
