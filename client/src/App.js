import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserInfoPage from "./pages/UserInfoPage";
import UserTasksPage from "./pages/UserTasksPage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserInfoPage />} />
        <Route path="/users/:userId/tasks" element={<UserTasksPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
