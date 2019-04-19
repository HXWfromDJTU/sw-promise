### sw-promise

sw-promise是一个模仿ES 6语法中的Promise 实现的一个Promsie库。

promiseA+规范，[传送门👉](https://promisesaplus.com/)
##### 安装与引入
```bat
$ npm install sw-promise
```
```js
var {MyPromise} = require('sw-promise');  // 引入
```

##### 使用
```js
//  测试
let pro  = new MyPromise(function(resolve,reject){
    setTimeout(function(){
        resolve('asd');
    },99)
})

pro.then(function(data){
   console.log(data);
})

console.log(123);    
```

##### 支持 
| 序号| 方法 | 解释 | 参数 |进度 |
| ------ | ------ | ------ | ------  | ------ | 
| 1️⃣ | new MyPromise() | 创建MyPromsie对象 | |  ✅  |
| 2️⃣ | MyPromise.race() | 多个Promise，以最快的一个为最终状态 || ✅  | 
| 3️⃣ | MyPromise.all() | 多个Promise,有一个Promise状态为pending或者rejected,则总MyPromise都为这个状态  | | ✅  |  
| 4️⃣ | MyPromise.reject | 创建一个状态为`rejected`的MyPromise对象 || ✅  |  
| 5️⃣ | MyPromise.resolve | 创建一个状态为`resolved`的MyPromise对象 || ✅  | 
| 6️⃣| Promise.prototype.then() | 用于取出状态中的值 || ✅  | 
| 7️⃣ |Promise.prototype.finally() |  | `pending` | 
| 8️⃣ | Promise.prototype.catch() |  | `pending` | 
| 9️⃣ | Promise.try() |  |  `pending` |  








