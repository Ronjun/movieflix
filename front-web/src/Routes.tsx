import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./Api/auth";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Redirect from="/" exact to="/login" />
        <Route path="/login" component={Login} />
        <Route
          path="/catalog"
          render={({ location }) => {
            if (!isAuthenticated()) {
              return (
                <Redirect
                  to={{ pathname: "/login", state: { from: location } }}
                />
              );
            }
            return <Catalog />
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
