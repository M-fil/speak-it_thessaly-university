import React from 'react';
import ShortTermStatistics from '@modules/HomePage/StatisticsPage/ShortTermStatistics/ShortTermStatistics';
import { Redirect, Route, Switch } from 'react-router';
import MainPage from './MainPage/MainPage';
import LongTermStatistics from './StatisticsPage/LongTermStatistics/LongTermStatistics';
import StartPage from './MainPage/StartPage/StartPage';
import { MainRoutes } from '@constants/routes';

const HomePage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route
          path={MainRoutes.shortTermStatistics}
          component={ShortTermStatistics}
        />
        <Route
          path={MainRoutes.longTermStatistics}
          component={LongTermStatistics}
        />
        <Route path={MainRoutes.mainPage} component={MainPage} />
        <Route path={MainRoutes.startPage} component={StartPage} />
        <Route path="/">
          <Redirect to={MainRoutes.startPage} />
        </Route>
      </Switch>
    </>
  );
};

export default HomePage;
