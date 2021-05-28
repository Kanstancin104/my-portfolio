import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Link } from "react-router-dom";

import Projects from './components/Projects/Projects'


function App() {

  return (
    <div className="App">
      <div className="header-button">
        <div className='button'>
          <Link to='./'>
            HOME
        </Link>
        </div>
        <div className='button'>
          <Link to='./aboutme'>
            ABOUT ME
        </Link>
        </div>
        <div className='button'>
          <Link to='./projects'>
            PROJECTS
        </Link>
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects

          />
        </Route>
        <Route path='/aboutme'>
          <About />
        </Route>

      </Switch>
      <div class="menu">
        <div class="label">Follow Me</div>
        <div class="spacer"></div>
        <div class="item"><span>Twitter</span></div>
        <div class="item"><span>Instagram</span></div>
        <div class="item"><span>LinkedIn</span></div>
        <div class="item"><span>YouTube</span></div>
        <div class="item"><span>TikTok</span></div>
      </div>
    </div>
  );
}

export default App;
