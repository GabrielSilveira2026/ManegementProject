import React from 'react'
import styles from './CartaoProjeto.module.css'
import {Link} from 'react-router-dom'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function CartaoProjeto({id, nome, categoria, orcamento,handleRemove}) {
  return (
    <div className={styles.cartaoProjeto}>
        <h4>{nome}</h4>
        <p>
            <span>Orçamento:</span> R${orcamento}
        </p>
        <p className={styles.categoria_texto}>
            {/* <div className={`${styles.container} ${styles[props.customClass]}`}> */}
            <span className={`${styles[categoria?.name?.toLowerCase()]}`}></span> {categoria?.name}
        </p>
        <div className={styles.cartaoProjeto_acoes}>
            <Link to="/">
                <BsPencil/>Editar
            </Link>
            <Link to="/">
                <BsFillTrashFill/>Excluir
            </Link>
        </div>
    </div>
  )
}

export default CartaoProjeto