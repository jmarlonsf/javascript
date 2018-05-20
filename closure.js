//var contador = 0;
//closure tem acesso ao scopo pai mesmo depois dela tersido destrurida

var tick = (function(){
	var contador = 0;
	
	return function(){
		contador += 1;
		console.log(contador);	
	}
})();

tick();
tick();
tick();