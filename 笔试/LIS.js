function LIS(ary) {
    var dp = [];
    var index = 0;
    for (var i = 0; i < ary.length; i++) {
        dp[i] = 1; // 长度最短为1
        for (var j = i+1; j < ary.length; j++) {
            if (ary[j] > ary[i]) {
                dp[j] = Math.max(dp[i],dp[j]+1);
            }
            if (dp[index] > dp[j]) {
                index = j;
            }
        }
    }
    console.log(index);
}


LIS([5, 1, 6, 2, 4]);

//var arr = [5,1,6,8,2,4,5,10];

//LIS(arr);