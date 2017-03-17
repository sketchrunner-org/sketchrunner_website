import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { HotRouter } from 'utils';

import { IndexPage } from 'pages';
import { DevelopersPage } from 'pages';
import { HelpPage } from 'pages';
import { AboutPage } from 'pages';
import { App } from 'components';

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
    </Route>
    <Route path="/developers" component={App}>
      <IndexRoute component={DevelopersPage} />
    </Route>
    <Route path="/help" component={App}>
      <IndexRoute component={HelpPage} />
    </Route>
    <Route path="/about" component={App}>
      <IndexRoute component={AboutPage} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
