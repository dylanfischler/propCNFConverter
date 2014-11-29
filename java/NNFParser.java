import java.util.*
//http://cogitolearning.co.uk/?p=573

public class NNFParser {
	public static final VOID = -1;
	public static final SINGLE = 0;
	public static final AND = 1;
	public static final OR = 2;
	public static final OPEN = 3; //open and close parans
	public static final CLOSE =4;
	public static final IFF = 5;
	public static final XOR = 6;
	public static final EXPR = 7;

	private String original;
	private int object;
	public NNFParser(int obj, String toParse){
		original = toParse;
		object = obj;
	}
	// public String parse(String toParse){
	// 	if(toParse == null)throw new IllegalArgumentException();
	// 	//now throw the string into a parser somehow....
	// 	//not sure how that's done.. ask Arjun?

	// }


}

