const fs = require('fs')
import url from 'url';
import http from 'http';

const arr = ["shit", "show", "games", "wtf"]
var file = fs.createWriteStream("hello.txt");
let num = 0; 
document.getElementById("buttons").addEventListener(('click'), function(e){
    file.write(arr[num])
    console.log(arr[num]);
    if(num > arr.length){num = 0}
    num += 1;
})