import React, {useEffect } from 'react';
import GlobalStyle from './styles';
import { getProducts, getProduct, signin, register } from './api';
function App() {
  useEffect(()=> {
    const products = async () => {
      // const data = await register({
      //   name: 'mm',
      //   email:'demo@demo.com',
      //   "password": '123456',
      //   "address": "rua dos bobos"
      // })
      const data = await signin('demo@demo.com', '123456');
      console.log(data);


    }

    products();
  });
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
