import React from 'react'
import styles from './CartaoProjeto.module.css'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function CartaoProjeto({ id, nome, categoria, orcamento, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.cartaoProjeto}>
            <h4>{nome}</h4>
            <p>
                <span>Orçamento:</span> R${orcamento}
            </p>
            <p className={styles.categoria_texto}>
                {/* <div className={`${styles.container} ${styles[props.customClass]}`}> */}
                <span className={`${styles[categoria?.nome?.toLowerCase()]}`}></span> {categoria?.nome}
            </p>
            <div className={styles.cartaoProjeto_acoes}>
                <Link to={`/projeto/${id}`}>
                    <BsPencil />Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>
    )
}

export default CartaoProjeto