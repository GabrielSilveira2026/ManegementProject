import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../layout/Loading/Loading';
import Container from '../../layout/Container/Container';

function Projeto() {
    const { id } = useParams()
    const [projeto, setProjeto] = useState([])
    const [mostraProjetoForm, setMostraProjetoForm] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
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
        },200)
    }, [])

    function toggleProjectForm(){
        setMostraProjetoForm(!mostraProjetoForm)
    }

    return (
        <>
            {
                projeto.nome?
                    (
                        <div className={styles.projetoDetalhes}>
                            <Container customClass="column">
                                <div className={styles.containerDetalhes}>
                                    <h1>Projeto: {projeto.nome}</h1>
                                    <button className={styles.btn} onClick={toggleProjectForm}>
                                        {
                                            !mostraProjetoForm?
                                                "Editar Projeto"
                                            :
                                                "Fechar"
                                        }
                                    </button>
                                    {
                                        !mostraProjetoForm?
                                            <div className={styles.projetoInfo}>
                                                <p>
                                                    <span>Categoria: </span> {projeto?.categoria?.nome}
                                                </p>
                                                <p>
                                                    <span>Total de orçamento</span> R${projeto.orcamento}
                                                </p> 
                                                <p>
                                                    <span>Total utilizado</span> R${projeto.custos}
                                                </p> 
                                            </div>
                                        :
                                            <div className={styles.projetoInfo}>
                                                <p>Formulario</p>
                                            </div>
                                    }
                                </div>
                            </Container>
                        </div>
                    )
                :
                    <Loading/>
            }
        </>
    )
}

export default Projeto