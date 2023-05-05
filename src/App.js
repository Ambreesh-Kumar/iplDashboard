import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
