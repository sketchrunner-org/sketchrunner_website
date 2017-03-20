import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { HotRouter } from 'utils';

import { IndexPage } from 'pages';
import { DevelopersPage } from 'pages';
import { HelpPage } from 'pages';
import { AboutPage } from 'pages';
import { ReleasesPage } from 'pages';
import { SignupPage } from 'pages';
import { App } from 'components';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-93978918-1'); // TODO: create "constants" file to add this type of keys

function logPageView() {
  ReactGA.set({ page: window.location.hash });
  ReactGA.pageview(window.location.hash);
}

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} onEnter={logPageView}/>
    </Route>
    <Route path="/developers" component={App}>
      <IndexRoute component={DevelopersPage} onEnter={logPageView} />
    </Route>
    <Route path="/help" component={App}>
      <IndexRoute component={HelpPage} onEnter={logPageView} />
    </Route>
    <Route path="/about" component={App}>
      <IndexRoute component={AboutPage} onEnter={logPageView} />
    </Route>
    <Route path="/releases" component={App}>
      <IndexRoute component={ReleasesPage} onEnter={logPageView} />
    </Route>
    <Route path="/signup" component={App}>
      <IndexRoute component={SignupPage} onEnter={logPageView} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
