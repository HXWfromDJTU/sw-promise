//  测试
let pro  = new MyPromise(function(resolve,reject){
    setTimeout(function(){
        resolve('asd');
    },99)
})

pro.then(function(data){
   console.log(data);
})

console.log(123)