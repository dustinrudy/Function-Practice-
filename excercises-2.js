// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
   if (x > y) {
   	return x
   }
   else {
   	return y 
   }
}

console.log(max(5,3))

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    return Math.max(x,y,z)
}

console.log(maxOfThree(4,2,1))

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var vowels = ['a','e','i','o','u']
   	return vowels.indexOf(char) !== -1
}

console.log(isVowel('a'))

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
	var newstr = "";
	for (var i = 0; i < phrase.length; i+=1) {
		if (isVowel(phrase[i])) {
			newstr += phrase[i];
		}
		else  {
			newstr += phrase[i] + "o" + phrase[i];
		}
	}
	return newstr;
	
}

console.log(translate('ba'))

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var newword = "";
    for (var i = phrase.length-1; i > -1; i -= 1) {
    	newword += phrase[i]
    }
return newword;
}

console.log(reverse('Dick'))