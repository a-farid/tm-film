import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (<div>
    <h3>Welcome to the movies app</h3>
    <nav className="home">
        <ul>
          <li className="menu-home">
            <Link to="/movies">Films</Link>
          </li>
          <li className="menu-home">
            <Link>TV Shows</Link>
          </li>
          <li className="menu-home">
            <Link>Documentary</Link>
          </li>
          <li className="menu-home">
            <Link>Kids</Link>
          </li>
        </ul>
      </nav>    
    </div>
)}
export default App;
