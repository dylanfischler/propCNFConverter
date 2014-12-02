//Some parsing adaptions taken from https://github.com/soney/jsep/blob/master/src/jsep.js
parser = function(propForm){
	var index = 0;

	procSpaces = function(){
		var curr = propForm.charAt(index);
		while(curr == " "){
			//advance index pointer 
			curr = propForm.charAt(++index);
		}
	},

	procExpression = function(){

	}

	procToken = function(){

	}

	
}