// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);
// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function capitalize(str)
{
	var strArray = str.trim().split(" ");
	var result = "";
	for (var i = 0; i < strArray.length; i++) {
	  result += strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
	  result += " ";
	}
        return result.trim();
}
sentence = capitalize(sentence);
console.log(sentence);
// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substr(1);
console.log(money);
