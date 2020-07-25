import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import styles from './index.module.css'

const Header = () => {
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
}

export default Header