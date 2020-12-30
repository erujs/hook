import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import People from './container/people/people';
import AppErr from './AppErr';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/home/Jerus" />} />
      <Route path="/home/:uid" exact component={People} />
      <Route path="/profile/:uid" exact component={People} />
      <Route render={() => <AppErr errorcode={"[404] Page Not Found!"} />} />
    </Switch>
  );
}

export default App;
