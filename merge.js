function merge(a, b) {
  //combined array
   // i
   // j
  //while  i and j less than arr.length
    //if a[0] <= b[0]
      //put a[i] into new array
      // i ++
    // else
      //put b[j] into new array
      // j ++

  //if(i > arr.length) put the rest of a in
    //same with b
  let combined = [];
  let i = 0
  let j = 0
  while( i < arr.length && j < arr.length){
    if(a[i] <= b[i]){
      combined.push(a[i]);
      i++
    }
  }

}

function mergeSort() {

}

module.exports = { merge, mergeSort};