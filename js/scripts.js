$(document).ready(function(){
	//(p <-> q) <-> (p xor q)
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

//adding some stack implementation
Array.prototype.peek = function(){
	if(this.length<1) return null;
	else return this[this.length-1]
}
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

Formula.prototype.tokenize = function(){
	//token stack
	var tokens = new Array();

	var formTokens = this.propForm.split(' ');
	var tokens = [];
	//fix any sticky parentheses 
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
			tokens.push("(");
			tokens.push(curr.substring(1, curr.length));
		}
		else if(curr.indexOf(")")>-1 && curr.length > 1){
			//close paran must be last element of token
			if(curr.indexOf(")")!=curr.length-1){
				console.log("Invalid spacing");
				return;
			}
			//insert rest of token as a new token to parse
			tokens.push(curr.substring(0, curr.length-1));
			tokens.push(")");
			
		}
		else tokens.push(curr);
	}

	console.log(tokens);

	var theStack = []
	var paranMem = []

	// var theQueue = new Queue();

	for(var i = 0; i < tokens.length; i++){
		var curr = tokens[i];

		// console.log(curr);
		if(curr=="("){
			console.log("opening paran");
			theStack.push(curr);
			paranMem.push(curr)
			console.log(theStack);
		}
		else if(curr==")"){
			while(theStack.peek() != "("){
				if(theStack.length > 0){
					// theQueue.enqueue(theStack.pop());
					theStack.clean(undefined);
				}
				else {console.log("paran match error"); return;};
				
			}
			theStack.pop();
			theStack.clean(undefined);
		}
		else paranMem.push(curr);



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
	// console.log(theQueue);

}

