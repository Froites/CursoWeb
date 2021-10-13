// pessoa -> 123 ->{...} ->
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'MAria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)

//Criando um objeto constante com Object.freeze()

const pessoaConstante = Object.freeze({ nome: 'Silas'})
pessoaConstante.nome = 'Athos'
console.log(pessoaConstante)