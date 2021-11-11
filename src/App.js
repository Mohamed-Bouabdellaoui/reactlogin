import Login from './component/Login'
import Signup from './component/Signup'
import {BrowserRouter as Router ,Switch , Route } from 'react-router-dom'


function App() {
  return (
  <Router>
    <Switch>
   <Route path='/Login' component={Login} />
   <Route exact path='/' component={Signup} />
   </Switch>
  </Router>
  );
}

export default App;
