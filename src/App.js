import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componet/Header";
import Home from "./componet/Home";
import Company from "./componet/Company";
import Products from "./componet/Products";
import AddBook from "./componet/AddBook";
import NoMatch from "./componet/NoMatch";
import FindBook from "./componet/FindBook";
import LogIn from "./componet/login/LogIn";
import facade from "./apiFacade";
import LoggedIn from "./componet/login/LoggedIn";
import Conference from "./componet/Conference";
import Speaker from "./componet/Speaker";
import Admin from "./componet/Admin";
import CreateConference from "./componet/CreateConference";
import CreateTalk from "./componet/CreateTalk";
import CreateSpeaker from "./componet/CreateSpeaker";
import EditConference from "./componet/EditConference";
import Editing from "./componet/Editing";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={props.bookFacade} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/speaker">
          <Speaker />
        </Route>
        <Route path="/conference">
          <Conference />
        </Route>
        <Route path="/admin/createtalk">
          <CreateTalk />
        </Route>
        <Route path="/admin/createspeaker">
          <CreateSpeaker />
        </Route>
        <Route path="/admin/editConference">
          <EditConference />
        </Route>
        <Route path={"/editing"}>
          <Editing />
        </Route>

        <Route path="/admin/createconference">
          <CreateConference />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <route path="/login">
          <div>
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div>
                <LoggedIn facade={facade} />
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
