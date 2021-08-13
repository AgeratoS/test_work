import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import Auth from "../auth/containers";
import SignIn from "../signin/containers";

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/auth">
                <Auth />
                <Link to="/sign_in">Are you haven't an account?</Link>
            </Route>

            <Route path={["/", "sign_in"]}>
                <SignIn />
                <Link to="auth">Have you got an account?</Link>
            </Route>
        </Switch>
    </Router>
)

export default Routes;