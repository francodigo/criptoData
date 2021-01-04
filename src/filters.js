import numeral from 'numeral';
//Use numeral for formatting data numbers

const dollarFilter = function(value) {
	if (!value) {
		return '$ O';
	}
	return numeral(value).format('($ 0.00a)');
};

const percentFilter = function(value) {
	if (!value) {
		return '% O';
	}
	return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
