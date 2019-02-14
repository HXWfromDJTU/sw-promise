let  {MyPromise} = require('./promise');
let all = require('./all');
let race = require('./race');  

// all方法挂载
MyPromise.all = all;
// race方法挂载
MyPromise.race = race;


exports.MyPromise = MyPromise;