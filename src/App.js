import configureStore from './configureStore';
import { createHashHistory } from 'history';
import HomePage from './routes/HomePage/HomePage.react';
import Page from './routes/Page/Page.react';
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { AnimatedRoute } from 'react-router-transition';

const history = createHashHistory();
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={HomePage} />
            <AnimatedRoute
              path="/page/:color/:id"
              component={Page}
              atEnter={{ offset: 100 }}
              atLeave={{ offset: 100 }}
              atActive={{ offset: 0 }}
              mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
              })}
            />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
