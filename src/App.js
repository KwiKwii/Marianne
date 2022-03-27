import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">

                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
