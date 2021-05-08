// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav/Navbar.jsx';
import Features from './components/features/features.jsx';
import Latest from './components/latest_stories/latest_stories.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Blog_Page from "./components/Blog_Page/Blog";



// import * as ReactBootSrap from "react-bootstrap";

function App() {
  return (
<BrowserRouter>
        <Switch>
         <Route component={Home} path="/" exact   />
          <Route component={Blog_Page} path="/blog"   />
{/*           <Route component={Yellow} path="/yellow"   /> */}
         </Switch>
</BrowserRouter>

 
 
  );
}

export default App;
