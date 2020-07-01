import React, { useState, useEffect } from 'react';
import Menu from './Menu/Menu';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import { UserContext } from './user.context';
import { UserService } from './services/user-service';
import './App.scss';



function App() {

  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function getUser() {
      const user = await UserService.get()
      setUser(user);
      history.push('./login')
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App vh-100">
          <div className="container mt-3 body flex-grow-1">
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/post/create">
                <PostCreate />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                Home!
              </Route>
            </Switch>
          </div>
          <Menu />
      </div>
    </UserContext.Provider>

  );
}

export default App;
