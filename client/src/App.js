import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import ResponsiveDrawer from "./components/NavBar";
import Loader from "./components/Loader";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />

          {isAuthenticated && <ResponsiveDrawer />}
          <div className="App">{routes}</div>
        </React.Fragment>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
