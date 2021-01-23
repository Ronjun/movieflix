import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';

export default function Routes(){
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}