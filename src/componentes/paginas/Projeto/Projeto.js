import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Projeto() {
    const { id } = useParams()
    const [projeto, setProjeto] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projetos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                setProjeto(dados)
            })
            .catch((erro) => { console.log(erro); })
    }, [])

    return (
        <div>
            {projeto?.nome}
        </div>
    )
}

export default Projeto