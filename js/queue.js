//Sacket stackoverflow 
Queue: function(){

    var items;

    this.enqueue = function(item){
        if(typeof(items) === 'undefined'){
            items = [];   
        }
        items.push(item);                       
    }

    this.dequeue = function(){
        return items.shift();                                                
    }

    this.peek = function(){
        return items[0];                  
    }
    this.toString = function(){
    	return items.toString;
    }
    this.length = function(){
    	return items.length;
    }

}