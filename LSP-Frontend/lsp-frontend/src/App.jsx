import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContainerRoutes from './ContainerRoutes';
import GlobalStyle from './style/GlobalStyles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ContainerRoutes />
    </BrowserRouter>
  );
}

export default App;
