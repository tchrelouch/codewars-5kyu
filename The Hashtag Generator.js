/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/
function generateHashtag (string) {
	string = string.replace(/\B\s+/g,"")
  if(string.length==0) return false;
  answer = `#${string[0].toUpperCase()}`+string.replace(/(?:\s)([a-z])/gi, (_,a)=>a.toUpperCase()).slice(1);
  return answer.length>140?false:answer;
}
