function buy(callback) {
    setTimeout(()=>{
        let cai = '蘑菇';
        callback(cai);
    }, 1000);
}

// 回调函数 将后续的处理逻辑传入当前要定做的事 事情做好之后调用此函数
buy(function cook(val) {
    // console.log(val);
});

// promise解决回调函数的问题 三个状态 成功，失败，等待
// resolve转为成功状态 reject转为失败状态
// Promise实例有then方法，两个参数是函数，分别是resolve和reject状态的回调函数
// 回调函数的参数就是转状态时传递的
let p = new Promise((resolve, reject)=>{
    // console.log(1);
    setTimeout(()=>{
        let cai = '蘑菇';
        resolve(cai);
    }, 500);
});
// console.log(2);
p.then((data)=>{
    console.log(data);
    },
    (err)=>{
    console.log(err);
});

