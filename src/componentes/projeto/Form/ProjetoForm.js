import { useEffect, useState } from 'react'
import Input from '../../form/input/Input'
import Select from '../../form/select/Select'
import SubmitButton from '../../form/submit/SubmitButton'
import styles from './ProjetoForm.module.css'

function ProjetoForm({ handleSubmit, btnText, dadosProjeto }) {

  const [categorias, setCategorias] = useState([])
  const [projeto, setProjeto] = useState(dadosProjeto || {})

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
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(projeto)
  }

  function handleChange(e) {
    setProjeto({ ...projeto, [e.target.name]: e.target.value })
  }

  function handleCategoria(e) {
    setProjeto({
      ...projeto, 
      categoria: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        placeholder="Digite o nome do projeto"
        name="nome"
        handleOnChange={handleChange}
        value={projeto.nome}
      />
      <Input
        type="number"
        text="Orçamento total do projeto"
        placeholder="Insira o orçamento total do projeto"
        name="orcamento"
        handleOnChange={handleChange}
        value={projeto.orcamento}
      />
      <Select
        name="categoria_id"
        text="Selecione categoria do projeto" 
        options={categorias} 
        handleOnChange={handleCategoria} 
        value={projeto.categoria ? projeto.categoria.id : ""}
      />
      <SubmitButton text={btnText} largura='maxima'/>
    </form>
  )
}

export default ProjetoForm