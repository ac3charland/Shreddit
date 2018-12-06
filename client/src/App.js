import React from 'react';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Posted from './pages/Posted';
import Studio from './pages/Studio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Main} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/posted/:postId" component={Posted} />
      <Route exact path="/studio" component={Studio} />
      <Footer />
    </div>
  </Router>
)

export default App;
