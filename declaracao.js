function dizerOi(nome){
	console.log("Olah " + nome);
}

//funcao anonima
var dizerOla = function (nome){
	console.log("Olah "+ nome)
};

// Construtor de funcao
var dizerTchau = new Function("nome", "console.log('Thchau ' + nome);")
