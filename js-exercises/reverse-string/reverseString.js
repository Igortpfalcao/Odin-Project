const reverseString = function(string) {
let result = "";
for (let i = string.length - 1; i >= 0; i--){
    result += string[i];
}
return result;

};
console.log (reverseString("banana"));

module.exports = reverseString;