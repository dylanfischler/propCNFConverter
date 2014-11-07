$(document).ready(function(){
	//(p↔q) ↔ (p⊕q)
	//[((p∧q)∨(¬p∧¬q))∧((p∧¬q)∨(¬p∧q))] ∨ [(¬p∨¬q)∧(p∨q))∧((¬p∨q)∧(p∨¬q))]
});

function convFormula(inputLoc){
	var userInput = $(inputLoc).val().replace(/\s+/g,' ').trim();
	var formula = new Formula(userInput); 
	//formula.generalize();
	formula.tokenize();

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

	/* Problem: user entered string will not always have spaces as delimiters
	var operators = []; list of Strings/charactors ^ || V 
	var operands = []; list of Strings IN ORDER 
	for(var i = 0; i< formTokens.length; i++){
		if(formTokens[i] == '^' || formTokens[i] == '||' || 
			formTokens[i] == 'v' || formTokens[i] == 'V' || 
			formTokens[i] == '&&' || formTokens[i] == '->' ||
			formTokens[i] == '<->' || formTokens[i] == '(+)')
			operators.push(formTokens[i]);
		else operands.push(formTokens[i]);
	}
	*/

	//Match 
	

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

Formula.prototype.tokenize = function(){
	//token stack
	var tokens = new Array();

	var theStack = new Array();
	var theQueue = new Queue();

	var formTokens = this.propForm.split(' ');

	for(var i = 0; i < formTokens.length; i++){
		var curr = formTokens[i];

		/* Checking for sticky parentheses */
		if(curr.indexOf("(")>-1 && curr.length > 1){
			//open paran must be first element of token
			if(curr.indexOf("(")!=0){
				console.log("Invalid spacing");
				return;
			}
			//insert rest of token as a new token to parse
			formTokens.splice(i+1, 0, curr.substring(1, curr.length-1));
		}
		if(curr.indexOf(")")>-1 && curr.length > 1){
			//close paran must be last element of token
			if(curr.indexOf(")")!=curr.length-1){
				console.log("Invalid spacing");
				return;
			}
			//insert rest of token as a new token to parse
			formTokens.splice(i+1, 0, curr.substring(0, curr.length-2));
		}

		console.log(curr);
		//operator
		if(ordOper.indexOf(curr) > -1){

		}
		else if(curr=="("){theStack.push(curr);}
		else if(curr==")"){
			while(theStack.peek() != "("){
				if(theStack.length > 0){
					theQueue.enqueue(theStack.pop());
				}
				else {console.log("paran match error"); return;};
				
			}
			theStack.pop();
		}



		// var curr = this.propForm.charAt(i);
		// if(curr == '('){
		// 	paranMem += curr;
		// 	paranStack.push(curr);
		// }
		// else if(curr == ')'){
		// 	if(paranStack.length == 0)
		// }
	}

	console.log(theStack);
	console.log(theQueue);

}

