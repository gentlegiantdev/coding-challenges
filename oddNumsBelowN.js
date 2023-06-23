function oddCount(n){
  let odds = 0;
  for(i=0;i<n;i++){
    if(i % 2 != 0){
      odds++;
    }
  }
  return odds;
}