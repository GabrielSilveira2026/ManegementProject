import React from 'react'

function ProjetoForm() {
  return (
    <form>
        <div>
            <input type="text" placeholder="Insira o nome do Projeto"/>
        </div>
        <div>
            <input type="text" placeholder="Insira o orçamento total do Projeto"/>
        </div>
        <div>
        <select name="catergoria_id">
            <option disabled>Categoria do Projeto</option>
        </select>
        </div>
        <div>
            <input type="submit" value="Criar Projeto"/>
        </div>
    </form>
  )
}

export default ProjetoForm