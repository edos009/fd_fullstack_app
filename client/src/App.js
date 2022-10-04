import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
      <Footer />
      {/* <UserForm />
      <UserList/> */}
    </>
  );
}

export default App;
