$(document).ready(function(){
	//(p <-> q) ^ (p xor q)
});

function convFormula(inputLoc){
	var userInput = $(inputLoc).val().replace(/\s+/g,' ').trim();
	var formula = new Formula(userInput); 
	formula.generalize();

	$("#converted input").val(formula.propForm)
}

var Formula = function(formula){
	this.propForm = formula;
}

Formula.prototype.generalize = function(){
	var formTokens = this.propForm.split(' ');
	var parsedForm = "";

	//replace user entered characters with reference keywords
	for(var i = 0; i < formTokens.length; i++){
		if(symbolRef.hasOwnProperty(formTokens[i])){
			parsedForm += symbolRef[formTokens[i]];
			if(i!=formTokens.length-1) parsedForm += " ";
		}
		else {
			parsedForm += formTokens[i]; 
			if(i!=formTokens.length-1) parsedForm += " ";
		}
	} 
		
	this.propForm = parsedForm;
};