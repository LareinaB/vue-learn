function minAbs(ary) {
    var minAbs = Math.abs(ary[1]-ary[0]);
    var start = 0;
    var end = 1;
    for (var i = 1; i < ary.length - 1; i++) {
        if(Math.abs(ary[i + 1] - ary[i]) < minAbs){
            minAbs = Math.abs(ary[i + 1] - ary[i]);
            start = i;
            end = i + 1;
        }
    }
    console.log(ary[start], ary[end]);
}


var ary = "2 3 4 7 5 6 5 12 32";
var res = ary.split(" ");
for (var i = 0; i < res.length; i++) {
    res[i] = parseInt(res[i]);
}
minAbs(res);