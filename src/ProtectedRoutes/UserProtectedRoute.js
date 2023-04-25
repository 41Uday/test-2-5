import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const UserProtectedRoute = (props) => {
  const role = Cookies.get("role");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserRole = () => {
    if (role === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    if (isLoggedIn && role === "user") {
      return navigate("/user");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserRole();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default UserProtectedRoute;
