import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <div id="main__layout">
            <Routes />
          </div>
          <GlobalStyle />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
