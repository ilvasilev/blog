import React, {Component} from 'react'
import Link from '../link'
import logo from '../../images/logo.png'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Header extends Component {

    static contextType = UserContext
  
    render() {
      const {
        loggedIn,
        user
      } = this.context
      
      const links = getNavigation(loggedIn, user)
  
      return (
        <header className={styles.navigation}>
          <img className={styles['logo-image']} src={logo} />
          {
            links.map(navElement => {
              return (
                <Link
                  key={navElement.title}
                  href={navElement.link}
                  title={navElement.title}
                  type="header"
                />
              )
            })
          }
        </header>
      )
    }
  }
  
  export default Header

/*const Header = () => {
    return (
        <header className={styles.navigation}>
            <img src={logo} className={styles['logo-image']} />
            <div className={styles.wrapper} >
      <Link to={'/'} className={styles['link']} > Home </Link>
      <Link to={'/publications'} className={styles['link']} > Publications </Link>
      <Link to={'/profile'} className={styles['link']} > Profile </Link>
      <Link to={'/register'} className={styles['link']} > Register </Link>
      <Link to={'/login'} className={styles['link']} > Login </Link>
      <Link to={'/logout'} className={styles['link']} > Logout </Link>
    </div>
        </header>
    )
}*/