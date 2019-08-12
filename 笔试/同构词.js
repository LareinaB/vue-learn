var ary = ["meat", "maet", "mtea", "mtae", "abcd", "shed", "koud", "bcda"];
var curObj = {};
for (var i = 0; i < ary.length; i++) {
    var curStr = "";
    var cur = ary[i].split("").sort();
    for (var j = 0; j < cur.length; j++) {
        curStr += cur[j];
    }
    if(typeof curObj[curStr] === 'undefined'){
        curObj[curStr] = 1;
    }else{
        curObj[curStr] ++;
    }
}
var resAry = [];
for (var key in curObj) {
    if(curObj[key] > 1){
        var curAry = [];
        for (var i = 0; i < curObj[key]; i++) {
            curAry.push(key);
        }
        resAry.push(curAry);
    } else {
        resAry.push(key);
    }
}
console.log(resAry);