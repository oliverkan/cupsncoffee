import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

function App() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/gallery" component={Gallery}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/shop" component={Shop}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
