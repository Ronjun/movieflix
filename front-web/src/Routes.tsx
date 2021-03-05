import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./Api/auth";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Redirect from="/" exact to="/login" />
        <Route
          path="/login"
          exact
          render={({ location }) => {
            if (isAuthenticated()) {
              return (
                <Redirect
                  to={{ pathname: "/Catalog", state: { from: location } }}
                />
              );
            }
            return <Login />;
          }}
        />
        <Route
          path="/catalog"
          exact
          render={({ location }) => {
            if (!isAuthenticated()) {
              return (
                <Redirect
                  to={{ pathname: "/login", state: { from: location } }}
                />
              );
            }
            return <Catalog />;
          }}
        />
        <Route path="/catalog/:movieId" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
