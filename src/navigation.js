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
import CreateArticlePage from './pages/create-article'


const Navigation = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/publications' component={Publications} />
            <Route path='/profile/:userid' component={ProfilePage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/logout' component={HomePage} />
            <Route path='/create' component={CreateArticlePage} />
        </Switch>
        </BrowserRouter>
    )

}

export default Navigation