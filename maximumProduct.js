function adjacentElementsProduct(array) {
  let cache=(-Infinity);
  array.map((v,i,arr)=>arr[i]*arr[i+1]>cache?cache=arr[i]*arr[i+1]:cache);
  return cache
}