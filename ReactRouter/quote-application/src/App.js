import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './components/quotes/NotFound';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to="/quotes"/>
            </Route>
            <Route path='/quotes' exact>
              <AllQuotes />
            </Route>
            <Route path='/quotes/:quoteId'>
              <QuoteDetail />
            </Route>
            <Route path='/new-quote'>
              <NewQuote />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
    </Layout>
  );
}

export default App;
