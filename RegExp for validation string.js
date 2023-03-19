/*
You have to using only one regexp!

input format:

let str = 'name:xxx,age:111,skill:xxx';
name/age/skill may be in any order, example:

//is positive:
'name:xxx,age:111,skill:xxx'
'skill:xxx,name:xxx,age:111'
'name:xxx,skill:xxx,age:111' e.t.c.
name/skill have to be letters [A-Za-z]+

age have to be number (0 is good value) [0-9]+

comma "," can't be in start or end

in positive tests don't worry about space e.t.c. (for example there is no test: "name: xxx, age: xxx, skil: xxx").
*/
let reg = /^(?!,)(?=.*name:[a-z]+)(?=.*age:\d+)(?=.*skill:[a-z]+)(?=(.*,){2}).*\w+$/i;
