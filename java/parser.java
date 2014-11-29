
//http://cogitolearning.co.uk/?p=573
public class parser {
	
	LinkedList<NNFParser> Storage;
	NNFParser future;
	public void parse(List<NNFParser> token)
	{
		Storage = (LinkedList<NNFParser>) token.clone();
		future = Storage.getFirst();

		expression();


	} 
	private void nextToken(){
		Storage.pop();
		if(Storage.isEmpty()){
			future = new NNFParser(NNFParser.VOID, "" );
		}
		else future = Storage.getFirst();
	}

	private void expression() {
		signedTerm(); //?
		sumOp(); //? 

	}
	private void sumOp(){
		if(future.obj == TOKEN.)


	}

}	