import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles';
import Routes from './Routes';
import history from './services/history';
function App() {
  return (
    <div className="App">
    	<Router history={history}>
			    		
   			<GlobalStyle />
   			<Routes />
    	</Router>
    </div>
  );
}

export default App;
