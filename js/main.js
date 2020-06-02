
let frase = "Japão é o melhor time do mundo!"
console.log(frase)
console.log(frase.replace("Japão","Brasil"))
console.log(frase.replace("do mundo!" ,"da asia!").toUpperCase())

let lista = ['Maçã','Pera','Uva']
console.log(lista)
console.log(lista[2])
lista.push('Laranja')
console.log(lista)
lista.pop() 
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" | "))
console.log(lista.join(" - "))

let frutas = [{nome: "maça",cor:"vermelha"}, {nome:"uva",cor:"roxa"}]
console.log(frutas)
console.log(frutas[1].nome)

let count = 0
while(count <= 5){
    console.log(count)
    count++
}

let count1 = 0
do{
    console.log(count1)
    count1++
} while(count1 <= 5)

for(contador = 0; contador <= 5; contador++){
    console.log(contador)
}

let data = new Date()
console.log(data)
console.log(data.getUTCDay())
console.log(data.getMonth())
console.log(data.getUTCHours())
console.log(data.getUTCMinutes())
console.log(data.getUTCSeconds())

function soma (n1,n2){
    console.log(n1+n2)
}
soma(50,100)

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"))

let validar = 0

function validarIdade(idade){
    if(idade >= 18){
        validar = true
    }
    else{
        validar = false
    
    }
    return validar
}

/*var idade = prompt("Qual é sua idade?")
validarIdade(idade)
console.log(validar)
*/

function clicou() {
   document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>"
   
}
function redirecionar(){
    window.open("https://www.google.com.br")
}
function trocar(){
    document.getElementById("mousemove").innerHTML="TROCOU!!"
}
function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
}
