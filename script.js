function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerStr  = s1.toLowerCase();
	const lowerSubStr  = s2.toLowerCase();
	const index = lowerStr.indexOf(lowerSubStr);
	if(index!=-1){
		return index+(s1.length-lowerStr.length);
	}else{
		return -1;
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
