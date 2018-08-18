import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './stores';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '@shopify/polaris/styles.css';
import { AppProvider } from '@shopify/polaris';
import './assets/css/main.css';
const target = document.querySelector('#root');

console.log('run to happy email');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <AppProvider>
          <App />
        </AppProvider>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
