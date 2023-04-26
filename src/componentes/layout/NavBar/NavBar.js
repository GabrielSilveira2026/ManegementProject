import React from 'react'
import {Link} from 'react-router-dom'
import Container from '../Container/Container'
import styles from './NavBar.module.css'
import logo from '../../../img/logo.png'

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Container>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt='manegementproject'></img>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar