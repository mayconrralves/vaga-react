import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from './store';
import GlobalStyle from './styles';
import history from './services/history';
function App() {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          
        </Router>
        <GlobalStyle />
      </PersistGate>  
    </Provider>
    
  );
}

export default App;
