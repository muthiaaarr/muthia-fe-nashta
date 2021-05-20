import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/cards/Cards'
import AddEvent from './components/add-event/AddEvent'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Cards}></Route>
          <Route exact path='/add-event' component={AddEvent}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
