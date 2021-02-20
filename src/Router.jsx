import React from 'react';
import {Route, Switch} from 'react-router';
import {Login, Home} from './templates';

// URLに応じて描画するコンポーネントを切り替える
const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="(/)?" component={Home} />
    </Switch>
  )
}

export default Router
