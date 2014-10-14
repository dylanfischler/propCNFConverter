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
	//'→': 'IMPLIES',
	'xor': 'BICON',
	//'⊕': 'BICON',
	'<->': 'BIDIR',
	//'↔': 'BIDIR',
	'/\\': 'AND',
	//'∧': 'AND',
	'^': 'AND',
	'\//': 'OR',
	'∨': 'OR',
	'-': '-'
	//'⌙': '-'
}