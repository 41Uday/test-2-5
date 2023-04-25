import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import "./App.css";

import Login from "./components/Login";

import SignUp from "./components/SignUp";

import Admin from "./components/Admin";
import NotFound from "./components/NotFound";
import User from "./components/User";
import Chat from "./components/Chat";
import UserProtectedRoute from "./ProtectedRoutes/UserProtectedRoute";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <Admin />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <UserProtectedRoute>
                <User />
              </UserProtectedRoute>
            }
          />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
