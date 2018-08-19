import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cate from '../components/Cate';
import main from '../components/index';

const Main = () => (
  <main>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cate">Cate</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={main} />
        <Route path="/cate" component={Cate} />
      </div>
    </Router>
  </main>
);

export default Main;
