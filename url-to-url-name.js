// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//Taking a url. It will be a string, yes? Will it ever be blank?

//We want to return only the domain name as a string.

//www.netflix.com -> "netflix"
//www.hbo.com -> "hbo"
//www.leonnoel.com -> "leonnoel"

//We want a function that will separate the url string at the periods and return only the url as a string. 

function returnUrlName(url) {
  let urlArr = url.split('.')
  return urlArr[1];
}

console.log(returnUrlName("www.netflix.com"));
console.log(returnUrlName("www.hbo.com"));
console.log(returnUrlName("www.leonnoel.com"));