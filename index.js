let  {MyPromise} = require('./promise');
let all = require('./all');
let race = require('./race');  

MyPromise.all = all;

MyPromise.race = race;


exports.MyPromise = MyPromise;