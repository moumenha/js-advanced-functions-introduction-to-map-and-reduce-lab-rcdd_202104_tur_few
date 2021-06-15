// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
    return sourceArray;
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x * x);
}

function reduceToTotal(sourceArray, startingPoint=0){
  const myTotal = sourceArray.reduce((acc, curr) => acc + curr
, startingPoint);
return myTotal;
}

function reduceToAllTrue(sourceArray){
  const reducer = function reduce(acc, curr) {
    if (!!acc == true && !!curr == true){
    return true;
  } else {
    return false;
  }

}
      return sourceArray.reduce(reducer, true);

}

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
} 


