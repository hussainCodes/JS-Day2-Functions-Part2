function isOdd(number){
 if(number % 2 == 1){
   return true;
}else{
   return false;
}
}

function oddsSmallerThan(number){
   if (isOdd(number)){
      return (number/2) | 0  ;
   }else{
      return (number/2)  ;
   }
}

function squareOrDouble(number){
   if (isOdd(number)){
      return number * number  ;
   }else{
      return number + number ;
   }
}
