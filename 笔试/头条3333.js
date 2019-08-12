function XOR(x, y){
   var result =  x === y ?  0 :  1;
   return result;
}

function decode(N, K, str){
    var codeAry = str.split("");
    var arr = [];
    arr.push(parseInt(codeAry[0]));
    for(var i = 1; i < N-1; i ++){
        var start = (i - K + 1) ? (i - K + 1) : 0;
        var cur = parseInt(codeAry[i]);
        for(var j = start; j < i; j ++){
            cur = XOR(cur, arr[j]);
        }
        arr.push(cur);
    }
    arr.push(codeAry[codeAry.length-1]);
    print(arr.join(""));
}


var line = ("6 2").split(" ");
var N = parseInt(line[0]);
var K = parseInt(line[1]);
var str = "1110001";
decode(N, K, str);