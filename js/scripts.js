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
//It seems for more complex predicates like (A|B)^C
//The collection of (A|B) as an isolated term is not
//regarded. I think your code ignores the ()'s   
Formula.prototype.generalize = function(){
	var formTokens = this.propForm.split(' ');
	var parsedForm = "";
	//perhaps filter the elements and the ^ V || -> <-> 
	//seperate lists of them
	var operators = /*list of Strings/charactors ^ || V */  
	var operands = /* list of Strings IN ORDER */ 
	for(var i = 0; i< formTokens.length; i++){
		if(formTokens[i] == '^' || formTokens[i] == '||' || 
			formTokens[i] == 'v' || formTokens[i] == 'V' || 
			formTokens[i] == '&&' || formTokens[i] == '->' ||
			formTokens[i] == '<->' || formTokens[i] == '(+)')
			operators += formTokens[i]
		else operands+= formTokens[i]
	}
	

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