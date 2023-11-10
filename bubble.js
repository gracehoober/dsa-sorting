function bubbleSort(arr) {
  //loop  i--
    //loop j= 0, i-1
      //compare j to j + 1
        //j > j+1 switch
  for(let i = arr.length - 1; i > 0; i--){
    for(let j = 0; j <= i - 1; j++){
      if(arr[j] > arr[j + 1]){
        let current = arr[j];
        let next = arr[j + 1];
        arr[j + 1] = current;
        arr[j] = next;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;