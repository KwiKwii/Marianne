import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import Basket from "./components/basket";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <div className="header_image"/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/basket">
                    <Basket/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
