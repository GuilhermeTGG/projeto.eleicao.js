import PromptSync from "prompt-sync"

const prompt = PromptSync();

let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let nulo = 0
let branco = 0 
let idade = 0
let voto;
let restart;
let autoriza;
let vencedor;
let numeroDeVotos;
let nome;

function autorizaVoto(){
    nome = prompt(`Digite o seu nome: `)
    console.clear()
idade = Number(prompt(`Olá, ${nome}. Quantos anos você tem? `))
  if (idade < 16) {
        autoriza = "NEGADO"
    }else if ((idade >= 16 && idade < 18) || (idade >= 70)) {
        autoriza = "VOTO OPCIONAL"
    }else {
        autoriza = "VOTO OBRIGATORIO"
    }}
    
    function votacao(autorizacao, voto){
        if(autorizacao === "VOTO OPCIONAL" || autorizacao === "VOTO OBRIGATORIO"){
            console.log("Voto autorizado")
            prompt("Pressione 'ENTER' para continuar...")
            do{
            console.clear()
            console.log("Digite seu voto: [1]Candidato1 [2]Candidato2 [3]Candidato3 [4]Branco [5]Nulo :")
            voto = Number(prompt(">> "))
       }while (voto != 1 && voto != 2 && voto != 3 && voto != 4 && voto != 5)

            if (voto === 1){
                console.log("Voto computado")
                console.log(`Você votou no: Candidato1`)
                candidato1++
            }else if(voto === 2){
                console.log("Voto computado")
                console.log(`Você votou no: Candidato2`)
            candidato2++
        }else if(voto === 3){
            console.log("Voto computado")
                console.log(`Você votou no: Candidato3`)
            candidato3++
        }else if (voto === 4){
            console.log("Voto computado")
                console.log(`Você votou em branco`)
            branco++
        }else if (voto === 5){
        console.log("Voto computado")
                console.log(`Você votou nulo`)
        nulo++
        }
    } else{
        console.log("VOCE NÃO PODE VOTAR")
    }}

    function exibeResultados(){
        console.log(`O Candidato 1 teve ${candidato1} votos. `)
        console.log(`O Candidato 2 teve ${candidato2} votos. `)
        console.log(`O Candidato 3 teve ${candidato3} votos. `)
        console.log(`Houveram um total de ${branco} votos brancos.`)
        console.log(`Houveram um total de ${nulo} votos nulos. `)
        prompt("Pressione 'ENTER' para continuar...")
        console.clear()
        console.log(`${vencedor} teve o maior número de Votos! Somando ${numeroDeVotos} votos!`)
        prompt("")
    }

    function calculaVencedor(){
        if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > branco && candidato1 > nulo){
            vencedor = "Candidato1"
            numeroDeVotos = candidato1
        }else if(candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > branco && candidato2 > nulo){
            vencedor = "Candidato2"
            numeroDeVotos = candidato2
        }else if(candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > branco && candidato3 > nulo){
            vencedor = "Candidato3"
            numeroDeVotos = candidato3
        }else if(branco > candidato1 && branco > candidato2 && branco > candidato3 && branco > nulo){
            vencedor = "Votos em Branco"
            numeroDeVotos = branco
        }else if (nulo > candidato1 && nulo > candidato2 && nulo > candidato3 && nulo > branco){
             vencedor = "Votos Nulos"
             numeroDeVotos = nulo
        }
        }
    

console.log("Bem vindo as votações deste ano! ")
prompt("Pressione 'ENTER' para dar início ao processo...");
console.clear()

do {
    autorizaVoto()
    votacao(autoriza)

   do{
    restart = prompt(`Tem mais alguém para votar? Digite 'sim' ou 'nao': `).toLowerCase();
} while (restart != 'sim' && restart != 'nao');
console.clear();

   }  while (restart === 'sim');

   calculaVencedor()
   exibeResultados()
