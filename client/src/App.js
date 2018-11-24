import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';

import { AppNavbar } from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import Store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
