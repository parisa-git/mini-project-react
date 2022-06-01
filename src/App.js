import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import './app.scss';
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {

  const[menuOpen,setMenuOpen]= useState(false);

  return (
    <div className="app">
      <Topbar open={menuOpen} setMenu={setMenuOpen} />
      {menuOpen && <Menu open={menuOpen} setMenu={setMenuOpen} />}
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
