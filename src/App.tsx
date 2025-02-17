
import React from 'react';
import './style/App.scss';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      
        <RouterProvider router={router} />

      
    
    </Provider>
  );
}

export default App;
