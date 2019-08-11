function LIS(ary) {
    var dp = [];
    var len = 1;
    for (var i = 0; i < ary.length; i++)//枚举子序列的终点
    {
        dp[i] = 1;// 初始化为1，长度最短为自身
        for (var j = 0; j < i; j++)//从头向终点检查每一个元素
        {
            if (ary[i] > ary[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);  // 状态转移
            }
        }
        len = Math.max(len, dp[i]);  // 比较每一个dp[i],最大值为答案
    }
    console.log(len);
}

LIS([5, 1, 6, 2, 4]);
var arr = [5,1,6,8,2,4,5,10];

LIS(arr);