import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import Basket from "./components/basket";
import Hero from "./components/hero";
import AdultsHub from "./components/adultsHub";
import AdultsDresses from "./components/adultsDresses";
import AdultsSkirts from "./components/adultsSkirts";
import AdultsSweatshirts from "./components/adultsSweatshirts";
import AdultsBlouses from "./components/adultsBlouses";
import ChildrenSkirts from "./components/childrenSkirts";
import ChildrenDresses from "./components/childrenDresses";
import ChildrenSweatshirts from "./components/childrenSweatshirts";
import ChildrenBlouses from "./components/childrenBlouses";
import ChildrenHub from "./components/childrenHub";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>

                {/*Strona główna*/}

                <Route exact path="/">
                    <Hero/>
                </Route>

                {/*Kobiety*/}

                <Route path="/adults">
                    <AdultsHub/>
                </Route>
                <Route path="/adultsdresses">
                    <AdultsDresses/>
                </Route>
                <Route path="/adultsskirts">
                    <AdultsSkirts/>
                </Route>
                <Route path="/adultssweatshirts">
                    <AdultsSweatshirts/>
                </Route>
                <Route path="/adultsblouses">
                    <AdultsBlouses/>
                </Route>

                {/*Dzieci*/}

                <Route path="/children">
                    <ChildrenHub/>
                </Route>
                <Route path="/childrenskirts">
                    <ChildrenSkirts/>
                </Route>
                <Route path="/childrendresses">
                    <ChildrenDresses/>
                </Route>
                <Route path="/childrensweatshirts">
                    <ChildrenSweatshirts/>
                </Route>
                <Route path="/childrenblouses">
                    <ChildrenBlouses/>
                </Route>

                {/*Logowanie i rejestracja*/}

                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>

                {/*Koszyk*/}

                <Route path="/basket">
                    <Basket/>
                </Route>


            </Switch>
        </Router>
    );
}

export default App;
