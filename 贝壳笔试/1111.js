function salary(ary, n){
    var salary = [];
    for (var i = 0; i < n; i++) {
        salary.push(100);
    }
    // 先循环比较左边
    for (var i = 1; i < n; i ++) {
        // 先比较左边的人 大的话就先+100
        if (ary[i] > ary[i - 1]) {
            salary[i] = salary[i-1] + 100;
        }
    }
    // 再循环比较右边
    for (var i = n - 2; i >= 0; i --) {
        if(ary[i] > ary[i + 1]){
            if(i-1 >= 0 && i-1 < n){
                salary[i] = salary[i+1] + 100;
                for(var j = i; j > 0; j --){
                    if(ary[j] < ary[j-1]){
                        salary[j-1] = salary[j] + 100;
                    }
                }
            }
        }
    }
    return salary;
}

var n = 7;
var ary = [10,22,1,16,15,2,1];
var salary = salary(ary, n);
var sum = salary.reduce((x,y)=>x+y,0);
console.log(sum);
console.log(salary);