function time(ary, n, interval, target){
    var last = ary[0];
    var finalMintes = target[0]*60 + target[1];
    var minTime = finalMintes - ary[0][0]*60 - ary[0][1] - interval;
    for (var i = 0; i < n; i++) {
        var res = ary[i];
        var minutes = res[0]*60 + res[1];
        var item = finalMintes - minutes - interval;
        if(item >= 0 && item < minTime){
            last = res;
            minTime = item;
        }
    }
    return last;
}
