import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import UsersPageContainer from "./components/Users/UsersPageContainer";
// import AuthPage from "./components/Auth/AuthPage";
import RegisterPage from "./components/Auth/RegisterPage";
import LoginPage from "./components/Auth/LoginPage";
import DialogsPageContainer from "./components/Dialogs/DialogsPageContainer";
// import { useAuth } from "./hooks/auth.hook";

export const useRoutes = (isAuthenticated) => {
  // const { ready } = useAuth();
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/profile/:id?" render={() => <ProfilePage />} />
        <Route path="/dialogs" exact render={() => <DialogsPageContainer />} />
        <Route path="/users" exact render={() => <UsersPageContainer />} />
        <Redirect to="/profile" />
      </Switch>
    );
  }

  // if (ready) {
  //   return <LoginPage />;
  // }

  return (
    <Switch>
      <Route path="/" exact render={() => <LoginPage />} />
      <Route path="/login" exact render={() => <LoginPage />} />
      <Route path="/register" exact render={() => <RegisterPage />} />
      <Redirect to="/" />
    </Switch>
  );
};
