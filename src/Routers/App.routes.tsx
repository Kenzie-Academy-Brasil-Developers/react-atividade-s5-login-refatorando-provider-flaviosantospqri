import { Switch, Route } from "react-router-dom";
import DashBoard from "../Pages/Dashboard";

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashBoard} />
    </Switch>
  );
};
