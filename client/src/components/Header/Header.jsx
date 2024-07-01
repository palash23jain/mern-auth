import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heading}>Auth</div>
        <ul className={styles.right}>
            <li>Home</li>
            <li>About</li>
            <li>Sign in</li>
        </ul>
    </div>
  )
}

export default Header