function salary(ary, n){
    var salary = [];
    for (var i = 0; i < n; i++) {
        salary.push(100);
    }
    for (var i = 0; i < n; i++) {
        // 先比较左边的人 大的话就先+100
        if(ary[i] > ary[i-1]){
            if(salary[i] === salary[i-1]){
                salary[i] = salary[i-1] + 100;
            }
        } else if (ary[i] < ary[i-1]){
            salary[i-1] = salary[i] + 100;
        }

        // 比右边大就要判断他是不是比左边大，大的话说明已经加过了就不再加
        if(ary[i] > ary[i+1]){
            if(ary[i] <= ary[i-1]){
                salary[i] = salary[i+1] + 100;
                salary[i-1] = salary[i] + 100;
            }
            // 比右边小就只给右边加
        } else if(ary[i] < ary[i+1]) {
            salary[i+1] = salary[i] + 100;
        }
    }
    return salary;
}

var n = 4;
var ary = [10,15,2,1];
var salary = salary(ary, n);

var sum = salary.reduce((x,y)=>x+y,0);

console.log(sum);