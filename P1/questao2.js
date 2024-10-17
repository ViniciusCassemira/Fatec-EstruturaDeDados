// Definição de objeto para controle da lista
const pacientes = {
  list: [],
  start: 0,
  end: 0
}

// Função que verifica se o início da lista é igual o fim, signifando que a lista está vazia
function isEmpty() {
  return pacientes.start === pacientes.end
}

// Função que retorna o número de pacientes na fila
function size() {
  return pacientes.end - pacientes.start
}

// Função que adiciona um novo paciente à fila, ordenando a lista por gravidade em ordem crescente
function adicionarPaciente(nome, gravidade) { 
  // Definição de objeto novoPaciente
  const novoPaciente = { nome, gravidade }
  
  // Adição do paciente no último lugar da fila
  pacientes.list[pacientes.end] = novoPaciente

  // Setando o próximo último lugar
  pacientes.end++
  
  // Verificando se existe apenas um paciente na fila, sendo desnecessária a ordenação
  if (pacientes.end === 1) return

  for (let i = 0; i < size(); i++) {
    for (let j = 0; j < size() - i - 1; j++) {
      // Comparando a gravidade dos pacientes e trocando se necessário
      if (pacientes.list[j].gravidade < pacientes.list[j + 1].gravidade) {
        const temp = pacientes.list[j]
        pacientes.list[j] = pacientes.list[j + 1]
        pacientes.list[j + 1] = temp
      }
    }
  }
}

// Função que simula o atendimento de pacientes, atendendo o primeiro da fila e o retirando da mesma
function atenderPaciente() {
  if (isEmpty()) {
    console.log("Nenhum paciente na fila!")
    return
  }

  // Armazenando o primeiro paciente 
  const first = pacientes.list[pacientes.start]

  // Excluindo o primeiro paciente
  delete pacientes.list[pacientes.start]

  // Setando o começo da lista para o próximo index
  pacientes.start++

  // Retornando o primeiro paciente
  return first;
}

// Função que lista todos os pacientes na fila
function listarPacientes() {
  console.log("---------- FILA SUS --------")
  // Percorrendo a lista de pacientes
  for (let i = pacientes.start; i < pacientes.end; i++) {
    console.log(`${pacientes.list[i].nome} - ${pacientes.list[i].gravidade}`)
  }
  console.log("----------------------------")
}

/*
 Testes
*/ 

adicionarPaciente("Eduardo", 1)
adicionarPaciente("Vinicius", 2)
adicionarPaciente("Dom Pedro II", 3)
adicionarPaciente("Godofredo de Bulhões", 4)

listarPacientes()

atenderPaciente()

listarPacientes()
