// module.exports = 

function check(str, bracketsConfig) {
  var strArr = str.split(''),
      steck = new Array;

      for (var i = 0; i < strArr.length; i++) {
        if(strArr[i] == bracketsConfig[0][0]) {
          steck.push(strArr[i]); 
        }

        if(strArr[i] == bracketsConfig[0][1]) {
          if(steck.pop() == bracketsConfig[0][0]) {}
          else return false;
        }
        
      }

  // console.log(steck); 

if (steck.length == 0) return true;
}

console.log(check('((()()))', [['(', ')']]));
