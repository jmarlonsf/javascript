function Stark(nome, idade, corDoCabelo){
	this.nome = nome;
	this.idade = idade;
	this.corDoCabelo = corDoCabelo;

	this.sobrenome = "Stark";	
	this.apresentar = function(){
		console.log("Olah, eu sou " + this.nome
			 + " " + this.sobrenome);
	}
}

var ned = new Stark("Ned", 40, "preto");
Stark.prototype.darTchau = function(){console.log("Tchau");}
//ned.darTchau();
//ned.apresentar();

var sansa = new Stark("Sansa", 13, "cobre");
//sansa.darTchau();
//sansa.apresentar();

String.prototype.apagar = function(){
	return "";
}

console.log("oi".apagar());