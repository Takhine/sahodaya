import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from 'pages/home';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
    );

}
ReactDOM.render(<App />, document.getElementById('root'));