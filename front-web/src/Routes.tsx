import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Login from './pages/Login';

export default function Routes(){
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/catalog' component={Catalog} />
      </Switch>
    </BrowserRouter>
  )
}