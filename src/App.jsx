import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/login/Login";
import User from "./components/user/User";
import Photo from "./components/photo/Photo";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/NotFound";

import { UserStorage } from "./contexts/UserContext";
import ProtectedRouter from "./helper/ProtectedRouter";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />

          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
