import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/HeaderNavber';
import Footer from './components/Footer';
import Favorites from './components/Tools';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Shopping_cart from './pages/Shopping_cart';
import memoryUtils from './utils/memoryUtils';
import './App.scss';

export default function App() {
  const { user } = memoryUtils;
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/news" component={ News } />
        <Route path="/shop" component={ Shop } />
        <Route path="/login" component={ Login } />
        <Route path="/shopping_cart" component={ Shopping_cart } />
        <Redirect to="/home" />
      </Switch>
      <Footer />
      <Favorites />
    </BrowserRouter>
  );
}
