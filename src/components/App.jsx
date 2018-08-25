import React, { Component } from 'react';
import ArticleAdd from './ArticleAdd';
import ArticleList from './ArticleList';
import ArticleInfo from './ArticleInfo';
import ArticleEdit from './ArticleEdit';
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles/new">Add Article</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>
);

export default App;
