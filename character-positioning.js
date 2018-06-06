function charPositioning(string){
  var letters = {};
  var string = string.split(" ").join("").toLowerCase()

for ( var i = 0; i < string.length; i++){
  //for (value of string){
  if (!letters.hasOwnProperty(string[i])){
    letters[string[i]] = [i];
  } else {
    letters[string[i]].push(i)
  }
}
return letters;
}
console.log(charPositioning("Abracadabra It is"));