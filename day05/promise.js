console.log(222);
setTimeout(function () {
    console.log(1)
}, 0);

new Promise(function (resolve, reject) {
    console.log(2);
    resolve(23);
}).then(data=>{
    console.log(data);
});