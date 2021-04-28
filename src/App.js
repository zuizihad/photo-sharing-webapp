import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Shared/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { createContext } from 'react';
import Profile from './components/Profile/Profile';
import UploadPhoto from './components/UploadPhoto/UploadPhoto';
import CreateAlbum from './components/CreateAlbum/CreateAlbum';

export const userContext = createContext();
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/createAlbum">
          <CreateAlbum></CreateAlbum>
        </Route>
        <Route path="/uploadPhoto">
          <UploadPhoto></UploadPhoto>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
