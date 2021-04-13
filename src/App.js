import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookPage from './pages/BookPage/BookPage';
import Container from './container/Container';




function App() {
  return (
    <Switch>
      <Route exact path='/:id/:bookId' component={BookPage} />
      <Container />
    </Switch>
  );
}

export default App;
