import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ProfilePage } from "./components/Profile/ProfilePage";
import { UsersPage } from "./components/Users/UsersPage";
import { DialogsPage } from "./components/Dialogs/DialogsPage";
import AuthPage from "./components/Auth/AuthPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/dialogs" exact>
          <DialogsPage />
        </Route>

        <Redirect to="/profile" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
