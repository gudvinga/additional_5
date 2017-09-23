module.exports = function check(str, bracketsConfig) {
  var strArr = str.split(''),
      steck = new Array;

      for (var i = 0; i < strArr.length; i++) {
        if(findOpen(strArr[i])) {
          steck.push(strArr[i]); 
        }

        if(!findOpen(strArr[i])) {
          if(findPare(strArr[i])) steck.pop();
          else return false;
        }
        
      }

    //find Open bracket
    function findOpen(firstBracket) {
      for(var i = 0; i < bracketsConfig.length; i++) {
        if (firstBracket == bracketsConfig[i][0]) return true;
      }
      return false;
    }  

    //find pare
    function findPare(curentBracket){
      var arrPare = [steck[steck.length -1],curentBracket];  
      for (var i = 0; i < bracketsConfig.length; i++) {
        if(arrPare.join() == bracketsConfig[i].join()) return true;
      }
      return false;
    }

  console.log(steck); 

if (steck.length == 0) return true;
}