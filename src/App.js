import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
      <Favorites />
    </Fragment>
  );
}

export default App;
