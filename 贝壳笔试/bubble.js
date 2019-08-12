function bubble(ary) {
    // 比较的轮数
    for (var i = 0; i < ary.length - 1; i++) {
        // 每一轮比较的次数 前面比较过的就不再比
        for (var j = 0; j < ary.length - i - 1; j++) {
            // 如果当前的比后一个大，就往后冒泡
            if(ary[j] > ary[j+1]){
                ary[j] = ary[j] + ary[j+1];
                ary[j+1] = ary[j] - ary[j+1];
                ary[j] = ary[j] - ary[j+1];
            }
        }
    }
    return ary;
}

var ary = [1,4,2,5,7,43,9,4,2,10];
console.log(bubble(ary));


function quick(ary) {
    if(ary.length <= 1){
        return ary;
    }
    var curIndex = Math.floor(ary.length/2);
    var curValue = ary.splice(curIndex, 1)[0];
    // 剩下的数组每一项都跟当前项比较
    var leftAry = [],
        rightAry = [];
    // 小就放左边 大就放右边
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        cur < curValue ? leftAry.push(cur) : rightAry.push(cur);
    }
    return quick(leftAry).concat(curValue, quick(rightAry));
}

console.log(quick(ary));

function insert() {
    let handAry = [];
    // 先取第一个数
    handAry.push(ary[0]);

    // 每次循环抓取后面的牌
    for (var i = 1; i < ary.length; i++) {
        var cur = ary[i];
        // 当前的牌 从后往前跟手里的牌依次比较，如果大于当前 就放他后面
        for (var j = handAry.length-1; j >= 0; j--) {
            if(cur > handAry[j]){
                handAry.splice(j+1, 0, cur);
                // 插完就break
                break;
            }
            if(j === 0){
                // 到最后一张 他还是小那就放在最前面
                handAry.unshift(cur);
            }
        }
    }
    return handAry;
}

console.log(insert(ary));