// App.jsx
 
import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Footer from './Footer.js';
import './App.css';
import './footer.css';
import Main from './Main.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* // this is visible to all pages */}
          <div id="page-container">
            <div id="content-wrap">
              {/* // these are just routes */}
              {/* <Route path="/research" component={Research} />
              <Route path="/index" component={Home} />    
              <Route path="/" component={Home} />           */}
              <Main/>
            </div>
          </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}
 
export default App;