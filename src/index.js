import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from 'pages/home';
import About from 'pages/about';
import Events from 'pages/events';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/about" exact={true} component={About}/>
                <Route path="/events" exact={true} component={Events}/>
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
    );

}
ReactDOM.render(<App />, document.getElementById('root'));