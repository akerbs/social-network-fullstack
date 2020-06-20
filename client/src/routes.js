import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import UsersPage from "./components/Users/UsersPage";
import DialogsPage from "./components/Dialogs/DialogsPage";
import AuthPage from "./components/Auth/AuthPage";
import store from "./redux/redux-store";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route
          path="/profile/:userId?"
          render={() => (
            <ProfilePage
              profilePage={store.getState().profilePage}
              dispatch={store.dispatch.bind(store)}
            />
          )}
        />
        <Route
          path="/dialogs"
          exact
          render={() => (
            <DialogsPage
              state={store.getState().dialogsPage}
              dispatch={store.dispatch.bind(store)}
            />
          )}
        />
        <Route path="/users" exact render={() => <UsersPage />} />
        <Redirect to="/profile" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact render={() => <AuthPage />} />
      <Redirect to="/" />
    </Switch>
  );
};
