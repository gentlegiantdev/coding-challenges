function vowelOne(s){
  return s.replace(/./g,v=>/[aeiou]/i.test(v)?'1':'0')
}