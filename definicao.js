//objetos sao variaveis que contem variaveis

var obj = {
	nome:"Jon", 
	sobrenome: "Snow", 
	idade : 16,
	apresentar: apresentacao
};

function apresentacao(){
	console.log("Ola, eu sou " + this.nome + " " + this.sobrenome);
}
obj.apresentar();