import { useState } from "react"
import alunoService from "../../services/alunos"

function CadastrarAlunos() {

  const [aluno, setAluno] = useState({
    id: 0,
    nome: ""
  })
  const [mensagem, setMensagem] = useState("")

  const handleNome = (e) => {
    setAluno({
      ...aluno,
      nome: e.target.value
    })
  }

  const handleId = (e) => {
    setAluno({
      ...aluno,
      id: parseInt(e.target.value)
    })
  }

  const inserir = async () => {
    await alunoService.inserir(aluno)
      .then(res => setMensagem('Aluno cadastrado com sucesso!'))
      .catch(error => setMensagem(error.message))
  }

  return(
    <>
      <h1>Cadastrar aluno</h1>
      {mensagem}
      <form>
        <div>
          <label>
            Id:
            <input 
              type="number" 
              id="id" 
              value={aluno.id} 
              onChange={e => handleId(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Nome:
            <input 
              type="text" 
              id="nome" 
              value={aluno.nome} 
              onChange={e => handleNome(e)}/>
          </label>
        </div>
        <button 
          onClick={(e) => {
          e.preventDefault()
          console.log(aluno)
          inserir()
        }}>
          Cadastrar
        </button>
      </form>
    </>
  )
}

export default CadastrarAlunos