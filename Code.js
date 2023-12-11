// Escrevendo as classes de um Jogo

// --------------------------------------------------------------------------------------
// Class
class Heroe {
    constructor(Nome, Idade, Tipo){
        this.Nome = Nome
        this.Idade = Idade
        this.Tipo = Tipo
    	}
        
    atacar(){
    
    switch(this.Tipo){    
    case "mago": 		console.log(`o ${this.Tipo} ${this.Nome} atacou usando magia`); break;
    case "guerreiro": 	console.log(`o ${this.Tipo} ${this.Nome} atacou usando espada`); break;
    case "monge": 		console.log(`o ${this.Tipo} ${this.Nome} atacou usando artes marciais`); break;
    case "ninja":		console.log(`o ${this.Tipo} ${this.Nome} atacou usando shuriken`); break;
    default:			console.log(`o ${this.Tipo} ${this.Nome} Tipo indefinido`);  
    	}
    }
}
// --------------------------------------------------------------------------------------
// Declaração Variaveis

let Personagem_1 = new Heroe("Gandalf",1000,"mago")
let Personagem_2 = new Heroe("Aragorn",200,"guerreiro")
let Personagem_3 = new Heroe("PadreMarcelo",50,"monge")
let Personagem_4 = new Heroe("ShunLee",30,"ninja")

// --------------------------------------------------------------------------------------
// Saidas
Personagem_1.atacar()
Personagem_2.atacar()
Personagem_3.atacar()
Personagem_4.atacar()
