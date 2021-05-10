import { AuthRoutes } from '@core/constants/routes';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PasswordReset from './components/PasswordReset/PasswordReset';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const Authentication = (): JSX.Element => {
  return (
    <Switch>
      <Route path={AuthRoutes.signIn} component={SignIn} />
      <Route path={AuthRoutes.signUp} component={SignUp} />
      <Route path={AuthRoutes.passwordReset} component={PasswordReset} />
      <Redirect from="/" to={AuthRoutes.signIn} />
    </Switch>
  );
};

export default Authentication;
