import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/HeaderNavber';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/shop" component={ Shop } />
        <Route path="/" component={ Home } />
      </Switch>
      <Footer />
      <Favorites />
    </BrowserRouter>
  );
}
