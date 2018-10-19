import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import Cart from '../components/Cart';
import CartItems from '../components/CartItems';
import ProductDetails from './ProductDetails';
import '../css/App.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <Search />
          <Cart />
          <CartItems />
        </div>
          <Route exact path='/' component={Home} />
          <Route path='/product/:id' component={ProductDetails} />
      </div>
    </Router>
  )
}

export default App;
