//this code looks kinda weird but don't worry ill explain.
/*This code will generate a guid for each tv show/ movie these are just some examples of tv shows
this guid will then be attached to a user , this will then be used to sort who's watching what next we break down the
intrest parameter -jb*/

	
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
   
}

console.log(guid());