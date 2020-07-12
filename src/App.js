/* 
    Developed by por Constanza Echeverria Cerda.
    12/julio/2020
    conii.echeverria@gmail.com
*/

import React from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';
import RoutesContainer from './routes/routes';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
  );
};

export default App;
