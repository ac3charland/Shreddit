import React from 'react';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Posted from './pages/Posted';
import Studio from './pages/Studio';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ShredPlayer from "./components/ShredPlayer";
import Nav from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShredPlayer from './components/ShredPlayer';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Banner />
      {/* <Nav /> */}
      <Route exact path="/" component={Main} />
      <Route exact path="/profile" component={Profile} />
      <Route expact path="/posted" component={Posted} />
      <Route exact path="/studio" component={Studio} />
      <Footer />
      {/* <ShredPlayer></ShredPlayer> */}
      <Route exact path="/shredplayer" component={ShredPlayer} />
      <Footer />
    </div>
  </Router>
)

export default App;
