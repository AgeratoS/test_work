import {
    BrowserRouter as Router,
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
            </Route>

            <Route path={["/", "sign_in"]}>
                <SignIn />
            </Route>
        </Switch>
    </Router>
)

export default Routes;