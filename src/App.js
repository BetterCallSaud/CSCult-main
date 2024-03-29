// OLD CODE NEW COMMIT

import "./App.css";
import {Switch, Route} from 'react-router-dom';

import Header from "./components/Home/Header";
import LandingBody from "./components/Home/LandingBody";
import About from "./components/About/About";
import Community from "./components/Community/Community";
import Events from './components/Events/Events';
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import React from "react";

import { Team } from "./components/Pages/Team/Team";

import DSAWeekly from './components/Pages/DSA-Weekly/DSAWeekly';

import Module1 from './components/Pages/DSA-Weekly/Module1/Module1';
import Module2 from './components/Pages/DSA-Weekly/Module2/Module2';
import Module3 from './components/Pages/DSA-Weekly/Module3/Module3';
import Module4 from './components/Pages/DSA-Weekly/Module4/Module4';
import Module5 from './components/Pages/DSA-Weekly/Module5/Module5';
import Module6 from './components/Pages/DSA-Weekly/Module6/Module6';
import Module7 from './components/Pages/DSA-Weekly/Module7/Module7';
import Module8 from './components/Pages/DSA-Weekly/Module8/Module8';

import Intro from './components/Pages/DSA-Weekly/Module1/Submodules/Intro';
import Mathematics from "./components/Pages/DSA-Weekly/Module1/Submodules/Mathematics";
import BitManip from './components/Pages/DSA-Weekly/Module1/Submodules/BitManip';

import Recursion from './components/Pages/DSA-Weekly/Module2/Recursion';

import Arrays from "./components/Pages/DSA-Weekly/Module3/Submodules/Arrays";
import Strings from "./components/Pages/DSA-Weekly/Module3/Submodules/Strings";
import Sorting from "./components/Pages/DSA-Weekly/Module3/Submodules/Sorting";
import Searching from "./components/Pages/DSA-Weekly/Module3/Submodules/Searching";
import Hashing from "./components/Pages/DSA-Weekly/Module3/Submodules/Hashing";

import Stacks from "./components/Pages/DSA-Weekly/Module4/Submodules/Stacks";
import Queues from "./components/Pages/DSA-Weekly/Module4/Submodules/Queues";

class Main extends React.Component {
    componentDidMount() {
      window.scrollTo(0,0);
      document.body.style.zoom = 0.8;
    }

    render() {
      return (
        <div className="app">
          <Header />
          <LandingBody />
          <About />
          <Community />
          <Events />
          <Products />
          <Footer />
        </div>    
      );
    }
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/#home" component={LandingBody} />
      <Route path="/#about" component={About} />
      <Route path="/#community" component={Community} />
      <Route path="/#events" component={Events} />
      <Route path="/#products" component={Products} />
      <Route path="/team" component={Team} />
      <Route path="/dsaweekly" component={DSAWeekly} exact/>
      <Route path="/dsaweekly/module1" component={Module1} exact />
      <Route path="/dsaweekly/module2" component={Module2} exact />
      <Route path="/dsaweekly/module3" component={Module3} exact />
      <Route path="/dsaweekly/module4" component={Module4} exact />
      <Route path="/dsaweekly/module5" component={Module5} exact />
      <Route path="/dsaweekly/module6" component={Module6} exact />
      <Route path="/dsaweekly/module7" component={Module7} exact />
      <Route path="/dsaweekly/module8" component={Module8} exact />
      <Route path="/dsaweekly/module1/introduction" component={Intro} exact />
      <Route path="/dsaweekly/module1/mathematics" component={Mathematics} exact />
      <Route path="/dsaweekly/module1/bit-manipulation" component={BitManip} exact />
      <Route path="/dsaweekly/module2/recursion" component={Recursion} exact />
      <Route path="/dsaweekly/module3/arrays" component={Arrays} exact />
      <Route path="/dsaweekly/module3/strings" component={Strings} exact />
      <Route path="/dsaweekly/module3/sorting" component={Sorting} exact />
      <Route path="/dsaweekly/module3/searching" component={Searching} exact />
      <Route path="/dsaweekly/module3/hashing" component={Hashing} exact />
      <Route path="/dsaweekly/module4/stacks" component={Stacks} exact />
      <Route path="/dsaweekly/module4/queues" component={Queues} exact />
    </Switch> 
  )
}

export default App;
