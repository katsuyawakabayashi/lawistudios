import "./App.css";
import blackBackground from "./img/black-background.jpg";
import whiteBackground from "./img/white-background.png";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/index";
import Awareness from "./pages/awareness";
import Love from "./pages/love";
import Wisdom from "./pages/wisdom";
import Intuition from "./pages/intuition";
import Shop from "./pages/shop";
import Team from "./pages/team";
import Support from "./pages/support";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/Footer";
import Works from "./pages/works";
import Gallery from "./pages/gallery";
import ComingSoon from "./pages/comingsoon";

function App() {
  const [background, setBackground] = useState(blackBackground);
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav((current) => !current);
  };
  const handleDefaultNav = () => {
    setNav(true);
  };

  return (
    <div
      className="grid justify-items-center h-screen bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home nav={nav} onClick={() => handleDefaultNav()} />
          </Route>
          <Route path="/love">
            <Love nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/awareness">
            <Awareness nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/wisdom">
            <Wisdom nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/intuition">
            <Intuition nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/shop">
            <Shop nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/works">
            <Works nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/gallery">
            <Gallery nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/team">
            <Team nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/support">
            <Support nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/contact">
            <Contact nav={nav} onClick={() => handleNav()} />
          </Route>
          <Route path="/comingsoon">
            <Contact nav={nav} onClick={() => handleNav()} />
          </Route>

          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
