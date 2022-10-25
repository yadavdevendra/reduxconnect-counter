import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store/store'
import CakeContainer from './components/CakeContainer'


function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
 
      </div>
    </Provider>
  );
}

export default App
