
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
	return (i%2===0);
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
  
  var arr = str.split('.');
  return (arr.length>1)?arr[arr.length-1]:false;
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
  var size = 0;
  var id = 0;
  var cpt = 0;
  
  for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === 'string' && arr[i].length > size){
	  id = i;
	  size = arr[i].length;
	}
  }
  return arr[id];
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
  var reverse = '';
  
   for(let i=str.length-1; i >=0; i--){
	   reverse += str[i];
   }
  
  return reverse;
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
   str = str.toLowerCase();
   return str === reverseString(str);   
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
  var sum = 0;
  for(let x of arr){
	  if(typeof x === 'number'){
		  sum += x;
	  }else if(Array.isArray(x)){
		  sum += nestedSum(x);
	  }
  }
  return sum;
};
