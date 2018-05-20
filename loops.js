//for, for in, while, do while

//while - executa um codigo a partir de uma condicao ser verdadeira ateh que se torne falsa

var x = 0;
/*
while(x <= 10){
	console.log("x eh igual a " + x);
	x = x + 1;
}
*/
//do while

do {
	console.log("x eh igual a " + x);
	x = x + 1;
}
while(x > 1);

//for

for(var y = 0; y < 10; y = y + 1){
	console.log(y);
}

var obj = {
	nome: 'Jon',
	sobrenome: 'Snow'
};

for (var valor in obj){
	console.log(valor)
	console.log(obj[valor]);
}
