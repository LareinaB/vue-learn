// 箭头函数么有this arguments
function a(b) {
    return b + 1;
}
//same as
// 去掉function关键字 参数有一个可以省略小括号
// 小括号和大括号之间有一个箭头
// 没有大括号则直接是返回值，有必须写return
let a = b => b + 1;

function aa(bb) {
    return function (cc) {
        return bb + cc;
    }
}
//same as 高阶函数
let aa = bb => cc => bb + cc;