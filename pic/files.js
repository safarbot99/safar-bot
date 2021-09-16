const fs = require("fs")
var i;
var x;
var name;

for(i=1;i<=114;i++){

    x=i; 
    if (x<=99 && x> 9){
        x = "0"+x.toString();
    } else if (x<=9){
        x = "00"+x.toString();
    } else {x = x.toString();}

    name = ""+x;
fs.mkdir("./"+name, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})}