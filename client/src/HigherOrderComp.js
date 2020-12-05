import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
// import packs from "/praticeapp/package";

function DetectHover(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.render(hovered)}
    </div>
  );
}

function NavBar(props) {
  function render(hovered) {
    const style = {
      backgroundColor: hovered ? "ligthblue" : "",
    };
    console.log(props);
    return (
      <div style={style} className='App'>
        <h1>Hello World!</h1>
        <h2>Lets start edit to see magic happen!</h2>
      </div>
    );
  }

  return <DetectHover render={render} />;
}

function App() {
  const links = ["home", "about", "profile"];
  return (
    <Router>
      <Route exact path='/' component={NavBar} />
      <Route path='/form' component={Form} />
      <ul>
        {links.map((link, id) => (
          <li key={id}>
            <Link to={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </Router>
  );
}

export default App;
