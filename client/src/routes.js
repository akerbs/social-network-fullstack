import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import AuthPage from "./components/Auth/AuthPage";
import DialogsPageContainer from "./components/Dialogs/DialogsPageContainer";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/profile/:userId?" render={() => <ProfilePage />} />
        <Route path="/dialogs" exact render={() => <DialogsPageContainer />} />
        <Route path="/users" exact render={() => <UsersPageContainer />} />
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
