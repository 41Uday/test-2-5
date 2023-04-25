import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const AdminProtectedRoute = (props) => {
  const role = Cookies.get("role");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserRole = () => {
    if (role === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    if (isLoggedIn && role === "admin") {
      return navigate("/admin");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserRole();
  }, [isLoggedIn]);
  return (
    <React.Fragment>
      {isLoggedIn && role === "admin" ? props.children : ""}
    </React.Fragment>
  );
};
export default AdminProtectedRoute;
