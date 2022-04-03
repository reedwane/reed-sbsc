import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Error from "./pages/Error";
import LoadingContextProvider from "./context/loadingContext";
import { DataProvider } from "./context/dataContext";
import Footer from "./global/Footer";

function App() {
  return (
    <div className="App">
      <LoadingContextProvider>
        <DataProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="login" element={<Login />} />

              <Route path="signup" element={<Signup />} />

              <Route path="users" element={<Users />} />

              <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </DataProvider>
      </LoadingContextProvider>
    </div>
  );
}

export default App;
