// 操作数组的方法
// forEach() filter map some every reduce (includes find es6)

let arr = [1,2,3,4,5];
arr.b = "100";  // 数组的私有属性
for(let i = 0; i < arr.length; i ++){
    //console.log(arr[i]);
}

// 1）forEach, for in, for, for of 的区别
// forEach不支持return
arr.forEach((item) => {  // 声明式 不关心如何实现
    //console.log(item);
});

for(let key in arr){  // key 会变成字符串类型
    //console.log(typeof key);  // 可以遍历除数组以外的私有属性
}

let obj = {name: 'zhangsan', age: 8}; // Object.keys 将对象的key作为新的数组
for(let val of Object.keys(obj)){ // 支持return 值of数组 不能遍历对象
    // ['name','age']
    //console.log(obj[val]);
}

// 2）filter 是否操作原数组：不； 返回结果：过滤后的新数组； 是否改变原数组:否
// 回调函数返回的结果：返回true 表示这一项放入新数组

let newArr = [1,2,3,4,5].filter((item) => {
  return item > 2 && item < 5;
});
//console.log(newArr);  // 1 === 1 === 1 => false

// 3）map 映射 将原有数组映射成一个新数组
// 是否操作原数组：不； 返回结果：过滤后的新数组；
// 回调函数返回的结果：返回什么这一项就是什么
let arr1 = [1,2,3].map((item) => {
    return `<li>${item}</li>`;  //`` es6中的模板字符串 ${}取变量
});
//console.log(arr1.join(''));
// 4）返回Boolean
let arr2 = [1,2,3,4,5];
console.log(arr2.includes(5));

// 5）返回找到的那一项  不会改变原数组 返回true表示找到了 找到即停止 找不到返回undefined
let result = arr2.find((item, index) => { // 找到具体的某一项
    return item === 5
});
//console.log(result);

//6）some 找到true后停止 返回true 找不到返回false
//7）every 找到false后停止 返回false
//8）reduce 收敛 4个参数 返回叠加后的结果 原数组不变
// 回调函数返回的结果
let sum = [1,2,3,4,5].reduce((prev, next, index, item) => {
    // 本次的返回值会作为下一次循环的prev
    return prev + next;
});
// console.log(sum);

let sum1 = [{price:30, count:2},{price:40, count:3},{price:50, count:4}].reduce((prev, next) => {
    // return prev.price * prev.count + next.price * next.count
    // 这样第二次遍历的时候prev就是一个数字没有price count属性
    return prev + next.price * next.count
}, 0); // 默认指定第一次的prev
// console.log(sum1);

// 数组扁平
let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce((prev, next) => {
    return prev.concat(next)
});
console.log(flat);
