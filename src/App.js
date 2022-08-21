import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/users/usersActions";

function App() {
  const users = useSelector((state) => state);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <div className="App"></div>;
}

export default App;
