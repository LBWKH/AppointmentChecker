import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from './modules/Authentication/Login'

const Routes = () => {

  return (
    <Switch>
      <Route path='/login' component={Login}/>

      <Route path='**' render={() => <Redirect to='login'/>}/>
    </Switch>
  )

}

export {Routes}