function LongestWord(sen) {
  let senArray = sen.split(" ");
  let longest = "";
  for(let i = 0; i < senArray.length; i++)  {
    senArray[i] = senArray[i].replace(/[^0-9a-z]/gi, '');
    if(senArray[i].length >= longest.length) {
      longest = senArray[i];

    }
  }


  return longest; 

}
   
console.log(LongestWord(readline()));