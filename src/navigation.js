import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './pages/home-page'
import Publications from './pages/publications'
import ProfilePage from './pages/profile'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import CreatePublication from './pages/create-publication'


const Navigation = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/publications' component={Publications} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/logout' component={HomePage} />
            <Route path='/create' component={CreatePublication} />
        </Switch>
        </BrowserRouter>
    )

}

export default Navigation