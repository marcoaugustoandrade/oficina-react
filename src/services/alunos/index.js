import axios from "axios"

async function listar() {
  const response = await axios.get(`http://localhost:3010/alunos`)
  return response
}

async function listarPorId(id) {
  const response = await axios.get(`http://localhost:3010/alunos/${id}`)
  return response
}

async function inserir(aluno) {
  const response = await axios.post(`http://localhost:3010/alunos`, aluno)
  return response
}

const alunoService = {
  listar,
  listarPorId,
  inserir
}

export default alunoService