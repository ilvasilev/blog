import React, {useContext} from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import HomePage from './pages/home-page'
import Publications from './pages/publications'
import ProfilePage from './pages/profile'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import CreateArticlePage from './pages/create-article'
import SingleArticle from './pages/single-article'
import EditArticle from './pages/edit-article'
import Users from './pages/users'
import UserContext from './Context'


const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user.loggedIn

    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/publications' component={Publications} />
            <Route path='/profile/:userid' component={ProfilePage} />
            <Route path='/article/:articleid' component={SingleArticle} />
            <Route path='/register'>
                {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />) }
            </Route>
            <Route path='/login'>
                {loggedIn ? (<Redirect to="/" />) : (<LoginPage />) }
            </Route>            
            <Route path='/create'>
                {loggedIn ? (<CreateArticlePage />) : (<Redirect to="/login" />) }
            </Route>
            <Route path='/editarticle/:articleId'>
                {loggedIn ? (<EditArticle />) : (<Redirect to="/login" />) }
            </Route>
            <Route path='/users' component={Users} />          
        </Switch>
        </BrowserRouter>
    )

}

export default Navigation