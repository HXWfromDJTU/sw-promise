let  {MyPromise} = require('./promise');
/**
 * Promise.race
 */
let race = promiseArr =>{
    // 用一个空的Promise函数来承载最后的状态
    let combinePro = new MyPromise(function(){})
    promiseArr.forEach(promise=>{
       if(!(promise instanceof MyPromise)) throw Error('必须传入MyPromise对象');
       let statusVal = promise._status;
       // 处理同步时，状态已经决定的Promise
       if(statusVal!='PENDING'){
           if(statusVal == 'RESOLVED'){
             combinePro._resolve(combinePro.message);
           }else{
             combinePro._reject(combinePro.message);
           }
         return;
       }
       Object.defineProperty(promise,'_status',{
           configurable:true,
           enumerable:true,
           get(){
               return statusVal;
           },
           set(newVal){
             statusVal = newVal;
             // 判断总的是否已经改变  
             if(combinePro._status!='PENDING') return;
             if(newVal=='RESOLVED'){
                 combinePro.message = this.message;
                 combinePro._resolve(combinePro.message);
             }else{
                 combinePro.message = this.message;
                 combinePro._reject(combinePro.message);
             }
           }
       })
    });
    return combinePro;
 }
 

 exports.race = race