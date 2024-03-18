import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { useEffect, useState } from "react";
import Headphones1 from "./pages/Headphones1";
import Headphones2 from "./pages/Headphones2";
import Headphones3 from "./pages/Headphones3";

import Speakers1 from "./pages/Speakers1";
import Speakers2 from "./pages/Speakers2";
import Earphones1 from "./pages/Earphones1";
import Error from "./pages/Error";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login");
    }
  }, []);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }

    return children;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Headphones />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Speakers />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/earphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Earphones />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones/1"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Headphones1 />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones/2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Headphones2 />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones/3"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Headphones3 />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers/1"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Speakers1/>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers/1"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Speakers1/>
            </ProtectedRoute>
          }
        ></Route>
         <Route
          path="/speakers/2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Speakers2/>
            </ProtectedRoute>
          }
        ></Route>
           <Route
          path="/earphones/1"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Earphones1 />
            </ProtectedRoute>
          }
        ></Route>
           <Route
          path="*"
          element={
           
              <Error/>
          
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
