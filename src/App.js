import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SingUp from './components/SingUp'
import TodoList from './components/TodoList'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={SingUp} />
    <Route exact path="/" component={TodoList} />
  </Switch>
)
export default App
