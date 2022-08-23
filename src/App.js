import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/users/usersActions";
import { Routes, Route } from "react-router-dom";
import UserInnerPage from "./pages/UserInnerPage";
import Index from "./pages";

function App() {
  const { users } = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:clientId" element={<UserInnerPage />} />
      </Routes>
    </div>
  );
}

export default App;
