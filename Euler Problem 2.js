//Problem #2 from Project Euler.
//By considering the terms in the Fibonacci sequence
//whose values do not exceed four million,
//find the sum of the even-valued terms.


var sum = 0;
var seq = [1,1,2];
while (seq[2] <= 4000000) {
	if (seq[2] % 2 === 0){
		sum += seq[2];
	}
	seq[2] = seq[0] + seq[1];
	seq[0] = seq[1];
	seq[1] = seq[2];
}

alert(sum);