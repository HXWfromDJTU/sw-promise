let  {MyPromise} = require('./promise');   
/**
 * Promise.race
 */
let all = promiseArr =>{
    // 用一个空的Promise函数来承载最后的状态
    let combinePro = new MyPromise(function(){})
    let proNum = promiseArr.length;
    let count = 0;
    let messageMap = new Map();

    // 组装返回结果的方法
    function getMessage(){
       let messageArr = [];
       promiseArr.forEach(promise=>{
           // 从messageMap中使用promise对象，依次按照原顺序取出值
           messageArr.push(messageMap.get(promise))
       })
       return messageArr;
    }
    // 统一根据状态进行判断
    function handle(promise){
    let statusVal = promise._status;
   // 判断是否已经改变
   if(status=='RESOLVED'){
       messageMap.set(promise,this.message); // 不论先后，先存入map中
       count++;
    // 所有都resolved才能够，达到总体的resolved
    if(count==proNum){
      combinePro._resolve(getMessage())
    }
    }else{
        // 只要出现一个reject，则全部都rejected掉
        combinePro._reject(getMessage());
      }
    }
    // 遍历每一个promise进行不同处理
    promiseArr.forEach(promise=>{
       if(!(promise instanceof MyPromise)) throw Error('必须传入MyPromise对象');
       let statusVal = promise._status;
       // 对已同步完成的promise进行状态收集
       if(statusVal!='PENDING'){
          handle(promise)
          return; // 注意此处的return 仅为退出本轮
       }
       // 处理异步的peomise状态，则添加set监听
       Object.defineProperty(promise,'_status',{
           configurable:true,
           enumerable:true,
           get(){
               return statusVal;
           },
           set(newVal){
             statusVal = newVal;
             handle(promise);
           }
       })
    });
    return combinePro;
 }

 exports.all = all;
