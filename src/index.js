import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import Home from "pages/home";
import About from "pages/about";
import Events from "pages/events";
import Blogs from "pages/blogs";
import BlogPage from "pages/blog-page";

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/blogs" exact={true} component={Blogs} />
          <Route
            path="/blogs/:slug/:blogId"
            exact={true}
            component={BlogPage}
          />
          <Route path="/events" exact={true} component={Events} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
