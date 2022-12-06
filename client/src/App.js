
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <LandingPage/>
            </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          </Switch>
          
          
        </div>
     
        
      
      
    </BrowserRouter>  
  );
}

export default App;
