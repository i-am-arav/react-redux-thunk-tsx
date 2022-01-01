import React from 'react';
import {BrowserRouter as Router, Switch, Route,RouteComponentProps} from 'react-router-dom'
import Counter from './counter'
import Todo from './todo/TodoRedux';
import PostList from './basic_api'
import HomePage from './HomePage';
import CounterRedux from './counter/CounterRedux';
import TodoRedux from './todo/TodoRedux';
import NotFound from './404';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/posts' exact component={PostList} />
        <Route path='/counter' component={Counter} />
        <Route path='/redux/counter' component={CounterRedux} />
        <Route path='/todo' exact component={Todo}/>
        <Route path='/redux/todo'exact component={TodoRedux} />
        <Route path='/' component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
