import { BrowserRouter, Switch, Route } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router