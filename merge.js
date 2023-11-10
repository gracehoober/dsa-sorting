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

function merge(a, b) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      combined.push(a[i]);
      i++;
    } else {
      combined.push(b[j]);
      j++;
    }
  }

  if (i < a.length) combined.push(...a.slice(i));
  if (j < b.length) combined.push(...b.slice(j));

  return combined;
}




function mergeSort(arr) {
  //base case: if arr.length is 1 or 0
  if (arr.length <= 1) return arr;

  // how to split to half
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const secondHalf = arr.slice(Math.floor(arr.length / 2));

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  return merge(sortedFirst, sortedSecond);
}

module.exports = { merge, mergeSort };
