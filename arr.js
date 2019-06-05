// 操作数组的方法
// forEach() filter map some every reduce (includes find es6)

let arr = [1,2,3,4,5];
arr.b = "100";  // 数组的私有属性
for(let i = 0; i < arr.length; i ++){
    //console.log(arr[i]);
}

// forEach, for in, for, for of 的区别
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

// filter 是否操作原数组：不； 返回结果：过滤后的新数组； 是否改变原数组:否
// 回调函数返回的结果：返回true 表示这一项放入新数组

let newArr = [1,2,3,4,5].filter((item) => {
  return item > 2 && item < 5;
});
//console.log(newArr);  // 1 === 1 === 1 => false

// map 映射 将原有数组映射成一个新数组
// 是否操作原数组：不； 返回结果：过滤后的新数组；
// 回调函数返回的结果：返回什么这一项就是什么
let arr1 = [1,2,3].map((item) => {
    return `<li>${item}</li>`;  //`` es6中的模板字符串 ${}取变量
});
console.log(arr1);
