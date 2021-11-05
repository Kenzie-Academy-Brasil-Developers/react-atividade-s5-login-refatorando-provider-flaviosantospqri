import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
