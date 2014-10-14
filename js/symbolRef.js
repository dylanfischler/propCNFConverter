/* Old Format -- not easy to parse with
symbolRef = {
	'IMPLIES': ['->', '→'],
	'BICON': ['xor','⊕'],
	'BIDIR': ['<->', '↔'],
	'OR': ['\//','∨'],
	'AND': ['//\\','∧'],
	'-': ['-','⌙']
}*/

symbolRef = {
	'->': 'IMPLIES',
	'xor': 'BICON',
	'<->': 'BIDIR',
	'/\\': 'AND',
	'^': 'AND',
	'\//': 'OR',
	'∨': 'OR',
	'-': '-' 
}