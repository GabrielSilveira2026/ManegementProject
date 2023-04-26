import React from 'react'
import {Link} from 'react-router-dom'
import Container from '../Container/Container'
import styles from './NavBar.module.css'
import logo from '../../../img/logo.png'

function NavBar() {
  return (
    <nav class={styles.navBar}>
      <Container>
        <Link to='/'>
          <img class={styles.logo} src={logo} alt='manegementproject'></img>
        </Link>
        <ul class={styles.list}>
          <li class={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li class={styles.item}>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li class={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          <li class={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar