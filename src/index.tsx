import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createAppStore } from './store';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import history from './history';
import theme from './theme';
import globalStyle from './globalStyle';

const store = createAppStore();

const GlobalStyle = globalStyle;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <>
          <App />
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
