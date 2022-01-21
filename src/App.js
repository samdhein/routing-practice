import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { useParams } from "react-router";
import Home from './views/Home';
import WordNumber from './views/WordNumber';
import ColorWord from './views/ColorWord.jsx'
 
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:inputword/:textcolor/:bkgcolor">
          <ColorWord />
        </Route>
        <Route path="/:userinput">
          <WordNumber />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;
