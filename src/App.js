import React from 'react';
import './App.css';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import PostPage from './Pages/PostPage';
import Authors from './Pages/Authors';

function App() {
  return (
    <>
      <Header />
      {/* <header>
        <h1>Blog</h1>
        <ul>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.posts}>Posts</Link>
          </li>
          <li>
            <Link to={routes.authors}>Authors</Link>
          </li>
        </ul>
      </header> */}
      <Switch>
        <Route path={routes.posts}>
          <h2>Posts Page</h2>
        </Route>
        <Route path={routes.post}>
          <PostPage />
        </Route>
        <Route path={routes.authors}>
          <Authors />
        </Route>
        <Route path={routes.home}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
