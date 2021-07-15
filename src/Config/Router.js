import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Admin } from "../Container/Admin";
import { Home } from "../Container/Home";
import { Login } from "../Container/Login";
import { Signup } from "../Container/Signup";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/user/:id" component={Home} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </Router>
    )
}