const palindromes = function(word){

   if(word == null){
    return(false);
   }
   let normalizedWord = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
   const len = normalizedWord.length;

   for(let i = 0; i < len / 2; i++){
        if(normalizedWord[i] != normalizedWord[len - 1 - i]){
            return false;
        }
   }
   return true;


};

module.exports = palindromes;