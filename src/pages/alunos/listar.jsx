import { useEffect, useState } from "react"
import alunoService from '../../services/alunos'

function ListagemAlunos(){

  const [alunos, setAlunos] = useState([])
  const [erros, setErros] = useState("")

  const listar = async () => {
    await alunoService.listar()
      .then(res => setAlunos(res.data))
      .catch(error => setErros(error.message))
  }

  useEffect(() => {
    listar()
  }, [])

  return(
    <>
      <h1>Listagem de alunos</h1>
      {erros && <div>Erro: {erros}</div>}
      {alunos.length > 0 &&
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
          {alunos.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nome}</td>
            </tr>
          ))}
          </tbody>
        </table>
      }
      <button onClick={() => listar()}>Recarregar da API</button>
    </>
  )
}

export default ListagemAlunos