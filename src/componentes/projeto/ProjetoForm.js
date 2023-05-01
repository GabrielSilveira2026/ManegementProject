import {useEffect, useState} from 'react'
import Input from '../form/input/Input'
import Select from '../form/select/Select'
import SubmitButton from '../form/submit/SubmitButton'
import styles from './ProjetoForm.module.css'

function ProjetoForm({btnText}) {

  const [categorias, setCategorias] = useState([]) 
  
  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCategorias(dados)
      })
      .catch(error => console.log(error))
  },[])

  return (
    <form className={styles.form}>
        <Input type="text" text="Nome do projeto" placeholder="Digite o nome do projeto" name="name"/>
        <Input type="number" text="Orçamento total do projeto" placeholder="Insira o orçamento total do projeto" name="orcamento"/>
        <Select name="categoria_id" text="Selecione categoria do projeto" options={categorias}/>
        <SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjetoForm