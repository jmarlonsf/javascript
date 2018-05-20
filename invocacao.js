function dizerOi(nome){
	console.log("Oi, " + nome);
	//console.log(this);
}

dizerOi("Marlon");

dizerOi.call({}, "Marlon");

dizerOi.apply({}, ["Maloka"]);